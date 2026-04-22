'use client';

import { useEffect, useRef } from 'react';
import { AI_OS_CLUSTERS } from '@/data/ai-os-clusters';

export default function ClusterGraph() {
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;
    let cleanup: (() => void) | undefined;
    (async () => {
      // Check for reduced motion preference
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const [d3, { gsap }] = await Promise.all([import('d3'), import('gsap')]);
      cleanup = runGraph(d3, gsap, prefersReducedMotion);
    })();
    return () => {
      cleanup?.();
      initRef.current = false;
    };
  }, []);

  return (
    <>
      <div id="aos-graph-container" className="aos-graph-container" style={{ position: 'relative', width: '100%', height: '100vh', background: 'linear-gradient(180deg, #001A3A 0%, #0A2040 50%, #001A3A 100%)' }}>
        <svg
          id="aos-graph-svg"
          width="100%"
          height="100%"
          role="img"
          aria-label="AI OS cluster visualization — 15 business areas, click any cluster to explore"
        >
          <defs>
            <filter id="aos-glow-red" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feFlood floodColor="#FF4444" floodOpacity="0.4" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="shadow" />
              <feMerge><feMergeNode in="shadow" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="aos-glow-green" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feFlood floodColor="#10B981" floodOpacity="0.4" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="shadow" />
              <feMerge><feMergeNode in="shadow" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="aos-glow-orange" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feFlood floodColor="#CC5500" floodOpacity="0.5" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="shadow" />
              <feMerge><feMergeNode in="shadow" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <g id="aos-links-group" />
          <g id="aos-cluster-nodes-group" />
          <rect id="aos-graph-tint" x="0" y="0" width="100%" height="100%" fill="rgb(0,10,24)" opacity="0" style={{ pointerEvents: 'none' }} />
          <g id="aos-inter-comp-links-group" />
          <g id="aos-active-cluster-group" />
          <g id="aos-component-nodes-group" />
        </svg>

        {/* Tooltip */}
        <div id="aos-graph-tooltip" style={{ position: 'fixed', background: 'rgba(0,10,24,0.96)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.75rem 1rem', maxWidth: '220px', zIndex: 300, pointerEvents: 'none', opacity: 0, transition: 'opacity 0.15s', backdropFilter: 'blur(8px)' }} role="tooltip">
          <div id="aos-tooltip-title" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', marginBottom: '0.3rem' }} />
          <div id="aos-tooltip-desc" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }} />
        </div>

        {/* Graph prompt */}
        <div style={{ position: 'absolute', bottom: '1.25rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', pointerEvents: 'none', zIndex: 15 }}>
          <p id="aos-graph-prompt-text" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0, background: 'rgba(0,10,24,0.8)', padding: '0.6rem 1.5rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.08)' }}>
            Click any area of your business to see what&apos;s missing
          </p>
        </div>

        {/* Structured state overlay */}
        <div id="aos-structured-overlay" style={{ position: 'absolute', top: '2rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 15, opacity: 0, transition: 'opacity 0.6s', pointerEvents: 'none', width: '100%', padding: '0 2rem' }}>
          <p style={{ fontFamily: 'var(--font-header)', fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)', color: '#10B981', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            This is what intelligence looks like.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>
            &quot;Structure first. Then AI.&quot; &nbsp;·&nbsp; You cannot automate disorder.
          </p>
        </div>
      </div>

      {/* Explored counter */}
      <div id="aos-gap-counter-bar" style={{ position: 'fixed', top: '5.5rem', right: '1.5rem', background: 'linear-gradient(135deg, #0A2040, #001A3A)', border: '1px solid rgba(204,85,0,0.4)', borderRadius: '8px', padding: '0.75rem 1.25rem', zIndex: 100, opacity: 0, transition: 'opacity 0.4s', pointerEvents: 'none', backdropFilter: 'blur(8px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span id="aos-gap-number" style={{ fontFamily: 'var(--font-header)', fontSize: '2rem', color: '#CC5500', lineHeight: 1 }}>0</span>
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.4 }}>Areas<br />Explored</div>
          <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.1)', margin: '0 0.25rem' }} />
          <div style={{ fontSize: '0.7rem', color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.4 }}>Avg: 9 of 15<br />have gaps</div>
        </div>
      </div>

      {/* Transform prompt */}
      <div id="aos-gap-transition-prompt" style={{ position: 'fixed', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,26,58,0.95)', border: '1px solid rgba(204,85,0,0.3)', borderRadius: '12px', padding: '1.5rem 2rem', textAlign: 'center', zIndex: 100, opacity: 0, pointerEvents: 'none', transition: 'opacity 0.4s', backdropFilter: 'blur(8px)', maxWidth: '480px', width: '90%' }}>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem' }}>
          You&apos;ve explored <strong id="aos-prompt-count" style={{ color: '#CC5500' }}>3</strong> areas. Most businesses have gaps in <strong style={{ color: '#EF4444' }}>9 of 15</strong> areas.
        </p>
        <button id="aos-show-transform-btn" style={{ marginTop: '12px', padding: '10px 24px', background: '#CC5500', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600, boxShadow: '0 4px 18px rgba(204,85,0,0.35)' }}>
          See the Structured View
        </button>
      </div>

      {/* Panel backdrop + data panel */}
      <div id="aos-panel-backdrop" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 190, opacity: 0, pointerEvents: 'none', transition: 'opacity 0.4s' }} />
      <div id="aos-data-panel" role="dialog" aria-modal="true" style={{ position: 'fixed', top: 0, right: '-520px', width: '500px', height: '100vh', background: 'linear-gradient(160deg, #0A2040 0%, #001A3A 100%)', borderLeft: '1px solid rgba(255,255,255,0.08)', zIndex: 200, transition: 'right 0.4s cubic-bezier(0.4,0,0.2,1)', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'sticky', top: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', background: '#0A2040', borderBottom: '1px solid rgba(255,255,255,0.08)', zIndex: 1 }}>
          <h5 id="aos-panel-breadcrumb" style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
            Component Detail
          </h5>
          <button id="aos-panel-close-btn" aria-label="Close panel" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', cursor: 'pointer', padding: '0.25rem', lineHeight: 1 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="panel-body" id="aos-panel-body-content" style={{ padding: '1.5rem', flex: 1 }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', padding: '1rem 0' }}>Click a component node to explore it.</p>
        </div>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
//  Graph engine
// ─────────────────────────────────────────────
function runGraph(d3: any, gsap: any, prefersReducedMotion: boolean): () => void {
  const svgEl = document.getElementById('aos-graph-svg') as SVGSVGElement | null;
  const container = document.getElementById('aos-graph-container') as HTMLElement | null;
  if (!svgEl || !container) return () => {};

  const svg = d3.select(svgEl);
  const linksGroup = d3.select(document.getElementById('aos-links-group'));
  const componentGroup = d3.select(document.getElementById('aos-component-nodes-group'));
  const clusterGroup = d3.select(document.getElementById('aos-cluster-nodes-group'));
  const activeClusterGroup = d3.select(document.getElementById('aos-active-cluster-group'));
  const interCompLinksGroup = d3.select(document.getElementById('aos-inter-comp-links-group'));

  let width = container.clientWidth;
  let height = container.clientHeight;
  let simulation: any = null;
  let clusterNodes: any[] = [];
  const links: any[] = [];
  let componentNodes: any[] = [];
  let interCompLinks: any[] = [];
  let componentNodesMap: Record<string, any> = {};
  let activeClusterNode: any = null;
  let cachedOrbitPositions: any[] = [];
  let cachedSvgRect: DOMRect | null = svgEl.getBoundingClientRect();
  let cachedGraphRect: DOMRect | null = container.getBoundingClientRect();
  let activeCluster: string | null = null;
  let isStructuredMode = false;
  let driftHandle: any = null;
  let exploredCount = 0;

  const tipEl = document.getElementById('aos-graph-tooltip') as HTMLElement | null;
  const tipTitleEl = document.getElementById('aos-tooltip-title') as HTMLElement | null;
  const tipDescEl = document.getElementById('aos-tooltip-desc') as HTMLElement | null;

  function unitVec(ax: number, ay: number, bx: number, by: number) {
    const dx = bx - ax, dy = by - ay;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    return { ux: dx / dist, uy: dy / dist };
  }

  function wrapText(textEl: any, name: string) {
    const words = name.split(/\s+/);
    if (words.length <= 1) {
      textEl.selectAll('tspan').remove();
      textEl.append('tspan').attr('x', 0).attr('dy', 0).text(name);
      return;
    }
    const mid = Math.ceil(words.length / 2);
    textEl.selectAll('tspan').remove();
    textEl.append('tspan').attr('x', 0).attr('dy', '-0.6em').text(words.slice(0, mid).join(' '));
    textEl.append('tspan').attr('x', 0).attr('dy', '1.2em').text(words.slice(mid).join(' '));
  }

  function getOrbitPositions(clusterNode: any, count: number, radius = 200) {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
      return { x: clusterNode.x + Math.cos(angle) * radius, y: clusterNode.y + Math.sin(angle) * radius };
    });
  }

  function showTooltip(event: MouseEvent, name: string, desc: string) {
    if (!tipEl || !tipTitleEl || !tipDescEl) return;
    tipTitleEl.textContent = name;
    tipDescEl.textContent = desc;
    (tipEl as HTMLElement).style.opacity = '1';
    positionTooltip(event);
  }
  function positionTooltip(event: MouseEvent) {
    if (!tipEl) return;
    const m = 16, w = 220, h = (tipEl as HTMLElement).offsetHeight || 80;
    let x = event.clientX + m, y = event.clientY - h / 2;
    if (x + w > window.innerWidth) x = event.clientX - w - m;
    if (y < m) y = m;
    if (y + h > window.innerHeight) y = window.innerHeight - h - m;
    (tipEl as HTMLElement).style.left = x + 'px';
    (tipEl as HTMLElement).style.top = y + 'px';
  }
  function positionTooltipOutward(nx: number, ny: number) {
    if (!tipEl || !cachedGraphRect) return;
    const m = 20, w = 220, h = (tipEl as HTMLElement).offsetHeight || 80;
    const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    let x = nx < cx ? nx - w - m : nx + m, y = ny < cy ? ny - h - m : ny + m;
    x = Math.max(cachedGraphRect.left + m, Math.min(cachedGraphRect.right - w - m, x));
    y = Math.max(cachedGraphRect.top + m, Math.min(cachedGraphRect.bottom - h - m, y));
    (tipEl as HTMLElement).style.left = x + 'px';
    (tipEl as HTMLElement).style.top = y + 'px';
  }
  function hideTooltip() {
    if (tipEl) (tipEl as HTMLElement).style.opacity = '0';
  }

  // Build cluster nodes
  clusterNodes = AI_OS_CLUSTERS.map((cluster, i) => ({
    id: cluster.id,
    name: cluster.name,
    color: cluster.color,
    x: (i % 5) / 5 * width * 0.8 + width * 0.1 + (Math.random() - 0.5) * 80,
    y: Math.floor(i / 5) / 3 * height * 0.75 + height * 0.12 + (Math.random() - 0.5) * 80,
    fx: null as number | null,
    fy: null as number | null,
    structuredX: cluster.structuredPos.x * width,
    structuredY: cluster.structuredPos.y * height,
    clusterRef: cluster,
  }));

  const nodeMap = new Map(clusterNodes.map(n => [n.id, n]));
  const linkSet = new Set<string>();
  AI_OS_CLUSTERS.forEach(cluster => {
    cluster.clusterConnections.forEach(targetId => {
      const key = [cluster.id, targetId].sort().join('--');
      if (!linkSet.has(key)) {
        linkSet.add(key);
        const s = nodeMap.get(cluster.id), t = nodeMap.get(targetId);
        if (s && t) links.push({ source: s, target: t, color: cluster.color });
      }
    });
  });

  function renderLinks() {
    linksGroup.selectAll('.aos-cluster-link').remove();
    linksGroup.selectAll('.aos-cluster-link').data(links).enter().append('line')
      .attr('class', 'aos-cluster-link')
      .attr('stroke', (d: any) => d.color)
      .attr('stroke-width', 1)
      .attr('stroke-opacity', 0.18)
      .attr('stroke-dasharray', '4 4');
  }

  function renderClusterNodes() {
    clusterGroup.selectAll('.aos-node-cluster').remove();
    const nodeG = clusterGroup.selectAll('.aos-node-cluster').data(clusterNodes).enter().append('g')
      .attr('class', 'aos-node-cluster')
      .style('cursor', 'pointer')
      .style('pointer-events', 'all')
      .call(d3.drag().on('start', dragStarted).on('drag', dragged).on('end', dragEnded))
      .on('mouseover', onClusterHover)
      .on('mousemove', (event: MouseEvent) => { if (tipEl && parseFloat((tipEl as HTMLElement).style.opacity) > 0) positionTooltip(event); })
      .on('mouseout', onClusterOut)
      .on('click', onClusterClick);

    nodeG.append('circle').attr('r', 46).attr('fill', '#0A1428').attr('stroke', (d: any) => d.color).attr('stroke-width', 2).attr('filter', 'url(#aos-glow-red)');
    nodeG.append('circle').attr('r', 46).attr('fill', (d: any) => d.color).attr('fill-opacity', 0.12).attr('stroke', 'none').attr('pointer-events', 'none');
    nodeG.append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .style('font-family', 'var(--font-body, sans-serif)')
      .style('font-size', '9.5px')
      .style('font-weight', '600')
      .style('fill', '#F4F5F7')
      .style('pointer-events', 'none')
      .each(function(this: SVGTextElement, d: any) { wrapText(d3.select(this), d.name); });
  }

  function ticked() {
    const pad = 60;
    clusterNodes.forEach((d: any) => {
      if (d.fx == null) {
        d.x = Math.max(pad, Math.min(width - pad, d.x));
        d.y = Math.max(pad, Math.min(height - 160, d.y));
      }
    });
    svg.selectAll('.aos-node-cluster').attr('transform', (d: any) => `translate(${d.x},${d.y})`);
    const cR = 46;
    linksGroup.selectAll('.aos-cluster-link').each(function(this: SVGLineElement, d: any) {
      const { ux, uy } = unitVec(d.source.x, d.source.y, d.target.x, d.target.y);
      d3.select(this)
        .attr('x1', d.source.x + ux * cR).attr('y1', d.source.y + uy * cR)
        .attr('x2', d.target.x - ux * cR).attr('y2', d.target.y - uy * cR);
    });
    if (activeCluster && activeClusterNode) {
      const parent = activeClusterNode;
      componentGroup.selectAll('.aos-node-component')
        .each(function(this: SVGGElement, d: any, i: number) {
          const pos = cachedOrbitPositions[i];
          d.x = pos ? pos.x : parent.x;
          d.y = pos ? pos.y : parent.y;
        })
        .attr('transform', (d: any) => `translate(${d.x},${d.y})`);
      const compR = 34;
      componentGroup.selectAll('.aos-comp-link').each(function(this: SVGLineElement, d: any) {
        const n = componentNodesMap[d.target]; if (!n) return;
        const { ux, uy } = unitVec(parent.x, parent.y, n.x, n.y);
        d3.select(this)
          .attr('x1', parent.x + ux * cR).attr('y1', parent.y + uy * cR)
          .attr('x2', n.x - ux * compR).attr('y2', n.y - uy * compR);
      });
      interCompLinksGroup.selectAll('.aos-inter-comp-link').each(function(this: SVGLineElement, d: any) {
        const src = componentNodesMap[d.source], tgt = componentNodesMap[d.target]; if (!src || !tgt) return;
        const { ux, uy } = unitVec(src.x, src.y, tgt.x, tgt.y);
        d3.select(this)
          .attr('x1', src.x + ux * compR).attr('y1', src.y + uy * compR)
          .attr('x2', tgt.x - ux * compR).attr('y2', tgt.y - uy * compR);
      });
    }
  }

  function dragStarted(event: any, d: any) { if (!event.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; }
  function dragged(event: any, d: any) { d.fx = event.x; d.fy = event.y; }
  function dragEnded(event: any, d: any) { if (!event.active) simulation.alphaTarget(0); if (!isStructuredMode) { d.fx = null; d.fy = null; } }

  function addChaosDrift() {
    if (prefersReducedMotion) return;
    if (driftHandle) gsap.ticker.remove(driftHandle);
    driftHandle = () => {
      if (!isStructuredMode && simulation) {
        clusterNodes.forEach(node => {
          if (node.fx == null) {
            node.vx = (node.vx || 0) + (Math.random() - 0.5) * 0.25;
            node.vy = (node.vy || 0) + (Math.random() - 0.5) * 0.25;
            node.vx *= 0.95;
            node.vy *= 0.95;
          }
        });
        if (simulation.alpha() < 0.08) simulation.alpha(0.08).restart();
      }
    };
    gsap.ticker.add(driftHandle);
  }

  function onClusterHover(event: MouseEvent, d: any) {
    if (activeCluster) return;
    showTooltip(event, d.name, d.clusterRef.chaosTooltip || '');
    const connected = new Set<string>([d.id]);
    links.forEach(l => {
      const s = l.source.id || l.source, t = l.target.id || l.target;
      if (s === d.id) connected.add(t);
      if (t === d.id) connected.add(s);
    });
    clusterGroup.selectAll('.aos-node-cluster').transition().duration(200).style('opacity', (nd: any) => connected.has(nd.id) ? 1 : 0.1);
    linksGroup.selectAll('.aos-cluster-link').transition().duration(200)
      .attr('stroke-opacity', (l: any) => { const s = l.source.id || l.source, t = l.target.id || l.target; return (s === d.id || t === d.id) ? 0.7 : 0.03; })
      .attr('stroke-width', (l: any) => { const s = l.source.id || l.source, t = l.target.id || l.target; return (s === d.id || t === d.id) ? 2 : 1; });
  }
  function onClusterOut() {
    hideTooltip();
    if (activeCluster) return;
    clusterGroup.selectAll('.aos-node-cluster').transition().duration(300).style('opacity', 1);
    linksGroup.selectAll('.aos-cluster-link').transition().duration(300).attr('stroke-opacity', 0.18).attr('stroke-width', 1);
  }
  function onClusterClick(event: MouseEvent, d: any) {
    event.stopPropagation();
    hideTooltip();
    if (activeCluster === d.id) collapseCluster();
    else { if (activeCluster) collapseCluster(); expandCluster(d.id); }
  }

  function expandCluster(clusterId: string) {
    const clusterData = AI_OS_CLUSTERS.find(c => c.id === clusterId);
    if (!clusterData || !clusterData.components?.length) return;
    activeCluster = clusterId;
    const parent = clusterNodes.find(n => n.id === clusterId);
    if (!parent) return;
    activeClusterNode = parent;
    const snap = 60;
    const orbitR = Math.min(160, Math.floor((width - 2 * snap) / 2) - 5, Math.floor((height - snap - 150) / 2) - 5);
    parent.x = Math.max(orbitR + snap, Math.min(width - orbitR - snap, parent.x));
    parent.y = Math.max(orbitR + snap, Math.min(height - orbitR - 150, parent.y));
    componentNodes = clusterData.components.map(comp => ({
      id: comp.id, name: comp.name, color: clusterData.color,
      x: parent.x, y: parent.y, compRef: comp, clusterId,
    }));
    componentNodesMap = {};
    componentNodes.forEach(n => { componentNodesMap[n.id] = n; });
    cachedOrbitPositions = getOrbitPositions(parent, componentNodes.length, orbitR);
    const positions = cachedOrbitPositions;

    componentGroup.selectAll('.aos-comp-link').remove();
    componentGroup.selectAll('.aos-comp-link').data(componentNodes).enter().insert('line', ':first-child')
      .attr('class', 'aos-comp-link')
      .attr('stroke', clusterData.color).attr('stroke-opacity', 0.3).attr('stroke-width', 1).attr('stroke-dasharray', '3 3')
      .attr('x1', parent.x).attr('y1', parent.y).attr('x2', parent.x).attr('y2', parent.y);

    interCompLinks = [];
    const compIdSet = new Set(clusterData.components.map(c => c.id));
    clusterData.components.forEach(comp => {
      comp.connections.forEach(targetId => {
        if (!compIdSet.has(targetId)) return;
        const key = [comp.id, targetId].sort().join('--');
        if (!interCompLinks.find((l: any) => l.key === key)) {
          interCompLinks.push({ key, source: comp.id, target: targetId });
        }
      });
    });
    interCompLinksGroup.selectAll('.aos-inter-comp-link').remove();
    interCompLinksGroup.selectAll('.aos-inter-comp-link').data(interCompLinks).enter().append('line')
      .attr('class', 'aos-inter-comp-link')
      .attr('stroke', clusterData.color).attr('stroke-opacity', 0.5).attr('stroke-width', 1.5).attr('stroke-dasharray', '5 4')
      .attr('x1', parent.x).attr('y1', parent.y).attr('x2', parent.x).attr('y2', parent.y);

    clusterGroup.selectAll('.aos-node-cluster').filter((nd: any) => nd.id !== clusterId).transition().duration(300).style('opacity', 0);
    linksGroup.selectAll('.aos-cluster-link').transition().duration(300).attr('stroke-opacity', 0);
    d3.select('#aos-graph-tint').transition().duration(350).attr('opacity', 0.82);
    const activeNodeEl = clusterGroup.selectAll('.aos-node-cluster').filter((d: any) => d.id === clusterId).node();
    if (activeNodeEl) activeClusterGroup.node().appendChild(activeNodeEl);
    componentGroup.raise();
    parent.fx = parent.x; parent.fy = parent.y;

    componentGroup.selectAll('.aos-node-component').remove();
    const compG = componentGroup.selectAll('.aos-node-component').data(componentNodes).enter().append('g')
      .attr('class', 'aos-node-component')
      .attr('transform', `translate(${parent.x},${parent.y})`)
      .style('cursor', 'pointer')
      .on('click', function(event: MouseEvent, d: any) { event.stopPropagation(); hideTooltip(); openComponentPanel(d, clusterData); })
      .on('mouseover', function(this: SVGGElement, _e: MouseEvent, d: any) {
        d3.select(this).select('circle').transition().duration(120).attr('r', 39);
        if (tipEl && cachedSvgRect) {
          tipTitleEl!.textContent = d.name;
          tipDescEl!.textContent = d.compRef.shortDesc || '';
          (tipEl as HTMLElement).style.opacity = '1';
          positionTooltipOutward(cachedSvgRect.left + d.x, cachedSvgRect.top + d.y);
        }
      })
      .on('mouseout', function(this: SVGGElement) {
        d3.select(this).select('circle').transition().duration(120).attr('r', 34);
        hideTooltip();
      });

    compG.append('circle').attr('r', 34).attr('fill', clusterData.color).attr('fill-opacity', 0.18).attr('stroke', clusterData.color).attr('stroke-width', 1.5).attr('stroke-opacity', 0.7);
    compG.append('text')
      .attr('text-anchor', 'middle').attr('dominant-baseline', 'central')
      .style('font-family', 'var(--font-body, sans-serif)').style('font-size', '9px').style('font-weight', '600').style('fill', '#F4F5F7').style('pointer-events', 'none')
      .each(function(this: SVGTextElement, d: any) { wrapText(d3.select(this), d.name); });

    componentNodes.forEach((compNode, i) => {
      const targetPos = positions[i]; if (!targetPos) return;
      const el = componentGroup.selectAll('.aos-node-component').filter((_: any, idx: number) => idx === i);
      if (prefersReducedMotion) {
        compNode.x = targetPos.x; compNode.y = targetPos.y;
        el.attr('transform', `translate(${compNode.x},${compNode.y})`);
      } else {
        gsap.fromTo(compNode, { x: parent.x, y: parent.y }, {
          x: targetPos.x, y: targetPos.y, duration: 0.5, delay: i * 0.05, ease: 'back.out(1.4)',
          onUpdate: () => el.attr('transform', `translate(${compNode.x},${compNode.y})`),
        });
      }
    });
    simulation.alpha(0.15).restart();
  }

  function collapseCluster() {
    if (!activeCluster) return;
    const collapsingId = activeCluster;
    const parent = clusterNodes.find(n => n.id === collapsingId);
    activeCluster = null;
    if (parent && !isStructuredMode) { parent.fx = null; parent.fy = null; }
    const compEls = componentGroup.selectAll('.aos-node-component');
    const count = compEls.size();
    if (count === 0) { _finishCollapse(); return; }
    let done = 0;
    compEls.each(function(this: SVGGElement, d: any, i: number) {
      const el = d3.select(this);
      if (prefersReducedMotion) {
        done++;
        if (done >= count) _finishCollapse();
      } else {
        gsap.to(d, {
          x: parent ? parent.x : width / 2, y: parent ? parent.y : height / 2,
          duration: 0.3, delay: i * 0.03, ease: 'power2.in',
          onUpdate: () => el.attr('transform', `translate(${d.x},${d.y})`),
          onComplete: () => { done++; if (done >= count) _finishCollapse(); },
        });
      }
    });
  }

  function _finishCollapse() {
    componentGroup.selectAll('.aos-node-component').remove();
    componentGroup.selectAll('.aos-comp-link').remove();
    interCompLinksGroup.selectAll('.aos-inter-comp-link').remove();
    interCompLinks = []; componentNodes = []; componentNodesMap = {}; cachedOrbitPositions = []; activeClusterNode = null;
    const nodeEl = activeClusterGroup.selectAll('.aos-node-cluster').node();
    if (nodeEl) clusterGroup.node().appendChild(nodeEl);
    const svgNode = svg.node();
    const tintEl = svgNode.querySelector('#aos-graph-tint');
    svgNode.insertBefore(linksGroup.node(), svgNode.firstChild);
    svgNode.insertBefore(clusterGroup.node(), tintEl);
    svgNode.insertBefore(tintEl, interCompLinksGroup.node());
    svgNode.insertBefore(interCompLinksGroup.node(), activeClusterGroup.node());
    svgNode.insertBefore(activeClusterGroup.node(), componentGroup.node());
    clusterGroup.selectAll('.aos-node-cluster').transition().duration(500).style('opacity', 1);
    d3.select('#aos-graph-tint').transition().duration(500).attr('opacity', 0);
    linksGroup.selectAll('.aos-cluster-link').transition().duration(500).attr('stroke-opacity', 0.18);
  }

  function openComponentPanel(compNode: any, cluster: any) {
    const comp = compNode.compRef;
    if (!comp || !cluster) return;
    exploredCount++;
    const gapNum = document.getElementById('aos-gap-number');
    const counterBar = document.getElementById('aos-gap-counter-bar');
    if (gapNum) gapNum.textContent = String(exploredCount);
    if (counterBar) (counterBar as HTMLElement).style.opacity = '1';
    const promptCount = document.getElementById('aos-prompt-count');
    const transitionPrompt = document.getElementById('aos-gap-transition-prompt');
    if (promptCount) promptCount.textContent = String(exploredCount);
    if (transitionPrompt && exploredCount >= 3) {
      (transitionPrompt as HTMLElement).style.opacity = '1';
      (transitionPrompt as HTMLElement).style.pointerEvents = 'auto';
    }

    const breadcrumb = document.getElementById('aos-panel-breadcrumb');
    if (breadcrumb) breadcrumb.textContent = cluster.name + ' / ' + comp.name;
    const panelBody = document.getElementById('aos-panel-body-content');
    if (!panelBody) return;

    panelBody.innerHTML = `
      <span style="display:inline-block;font-size:0.65rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;padding:0.3rem 0.75rem;border-radius:2rem;margin-bottom:0.75rem;background:${cluster.color}22;color:${cluster.color};border:1px solid ${cluster.color}44">${cluster.name}</span>
      <h2 style="font-family:var(--font-header);font-size:1.6rem;text-transform:uppercase;letter-spacing:0.02em;color:#fff;line-height:1.1;margin-bottom:0.5rem;">${comp.name}</h2>
      <p style="font-size:0.85rem;color:rgba(255,255,255,0.7);margin-bottom:1.5rem;line-height:1.6;">${comp.shortDesc || ''}</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;border:1px solid rgba(255,255,255,0.1);border-radius:6px;overflow:hidden;margin-bottom:1.5rem;">
        <button id="aos-tab-chaos" style="padding:0.6rem;text-align:center;font-size:0.7rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;background:rgba(239,68,68,0.15);color:#EF4444;border:none;border-right:1px solid rgba(255,255,255,0.1);opacity:1;">Chaos State</button>
        <button id="aos-tab-structured" style="padding:0.6rem;text-align:center;font-size:0.7rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;background:rgba(16,185,129,0.12);color:#10B981;border:none;opacity:0.4;">Structured</button>
      </div>
      <div id="aos-panel-view-chaos" style="display:block">${comp.chaosHTML || ''}</div>
      <div id="aos-panel-view-structured" style="display:none">${comp.structuredHTML || ''}</div>
      ${comp.consequence ? `<div style="background:rgba(245,158,11,0.08);border-left:3px solid #F59E0B;padding:0.85rem 1rem;border-radius:0 6px 6px 0;margin-top:1rem;"><p style="font-size:0.8rem;color:rgba(255,255,255,0.7);line-height:1.6;font-style:italic;margin:0;">${comp.consequence}</p></div>` : ''}
      <div style="margin-top:1.5rem;padding:1.25rem;background:rgba(204,85,0,0.08);border:1px solid rgba(204,85,0,0.25);border-radius:8px;text-align:center;">
        <p style="font-size:0.85rem;color:rgba(255,255,255,0.7);margin-bottom:0.75rem;">Ready to build this in your business?</p>
        <a href="/book-a-call" style="display:inline-block;padding:0.6rem 1.5rem;background:#CC5500;color:#fff;border-radius:4px;font-weight:600;font-size:0.875rem;text-decoration:none;box-shadow:0 4px 18px rgba(204,85,0,0.35);">Book a Discovery Call</a>
      </div>
    `;

    document.getElementById('aos-tab-chaos')?.addEventListener('click', () => switchTab('chaos'));
    document.getElementById('aos-tab-structured')?.addEventListener('click', () => switchTab('structured'));

    const panel = document.getElementById('aos-data-panel');
    const backdrop = document.getElementById('aos-panel-backdrop');
    if (panel) (panel as HTMLElement).style.right = '0';
    if (backdrop) { (backdrop as HTMLElement).style.opacity = '1'; (backdrop as HTMLElement).style.pointerEvents = 'auto'; }
  }

  function switchTab(mode: 'chaos' | 'structured') {
    const chaosView = document.getElementById('aos-panel-view-chaos');
    const structView = document.getElementById('aos-panel-view-structured');
    const chaosTab = document.getElementById('aos-tab-chaos');
    const structTab = document.getElementById('aos-tab-structured');
    if (chaosView) (chaosView as HTMLElement).style.display = mode === 'chaos' ? 'block' : 'none';
    if (structView) (structView as HTMLElement).style.display = mode === 'structured' ? 'block' : 'none';
    if (chaosTab) (chaosTab as HTMLElement).style.opacity = mode === 'chaos' ? '1' : '0.4';
    if (structTab) (structTab as HTMLElement).style.opacity = mode === 'structured' ? '1' : '0.4';
  }

  function closePanel() {
    const panel = document.getElementById('aos-data-panel');
    const backdrop = document.getElementById('aos-panel-backdrop');
    if (panel) (panel as HTMLElement).style.right = '-520px';
    if (backdrop) { (backdrop as HTMLElement).style.opacity = '0'; (backdrop as HTMLElement).style.pointerEvents = 'none'; }
  }

  function transformToStructured() {
    if (isStructuredMode) return;
    isStructuredMode = true;
    collapseCluster();
    let done = 0;
    const total = clusterNodes.length;
    clusterNodes.forEach((node, i) => {
      if (prefersReducedMotion) {
        node.fx = node.structuredX; node.fy = node.structuredY;
        node.x = node.structuredX; node.y = node.structuredY;
        done++;
        if (done >= total) {
          clusterGroup.selectAll('.aos-node-cluster circle:first-child').attr('fill', '#041228').attr('filter', 'url(#aos-glow-green)');
          const overlay = document.getElementById('aos-structured-overlay');
          if (overlay) (overlay as HTMLElement).style.opacity = '1';
          const promptEl = document.getElementById('aos-graph-prompt-text');
          if (promptEl) promptEl.textContent = 'Click any cluster to explore its structured components';
        }
      } else {
        gsap.to(node, {
          x: node.structuredX, y: node.structuredY, duration: 1.8, delay: i * 0.05, ease: 'power2.inOut',
          onUpdate: () => { node.fx = node.x; node.fy = node.y; },
          onComplete: () => {
            node.fx = node.structuredX; node.fy = node.structuredY; done++;
            if (done >= total) {
              clusterGroup.selectAll('.aos-node-cluster circle:first-child').attr('fill', '#041228').attr('filter', 'url(#aos-glow-green)');
              const overlay = document.getElementById('aos-structured-overlay');
              if (overlay) (overlay as HTMLElement).style.opacity = '1';
              const promptEl = document.getElementById('aos-graph-prompt-text');
              if (promptEl) promptEl.textContent = 'Click any cluster to explore its structured components';
            }
          },
        });
      }
    });
    simulation.alpha(0.3).restart();
    linksGroup.selectAll('.aos-cluster-link').transition().duration(1200).delay((_: any, i: number) => i * 40)
      .attr('stroke-opacity', 0.45).attr('stroke-dasharray', 'none');
  }

  function transformToChaos() {
    if (!isStructuredMode) return;
    isStructuredMode = false;
    const overlay = document.getElementById('aos-structured-overlay');
    if (overlay) (overlay as HTMLElement).style.opacity = '0';
    clusterNodes.forEach(node => { node.fx = null; node.fy = null; });
    clusterGroup.selectAll('.aos-node-cluster circle:first-child').attr('fill', '#0A1428').attr('filter', 'url(#aos-glow-red)');
    linksGroup.selectAll('.aos-cluster-link').transition().duration(800)
      .attr('stroke-opacity', 0.18).attr('stroke-dasharray', '4 4');
    simulation.alpha(0.5).restart();
    addChaosDrift();
  }

  renderLinks();
  renderClusterNodes();

  simulation = d3.forceSimulation(clusterNodes)
    .force('link', d3.forceLink(links).id((d: any) => d.id).distance(240).strength(0.25))
    .force('charge', d3.forceManyBody().strength(-900))
    .force('center', d3.forceCenter(width / 2, height / 2 - 60))
    .force('collide', d3.forceCollide(90).strength(0.8))
    .on('tick', ticked);

  addChaosDrift();

  // SVG background click to collapse
  svg.on('click', function(event: MouseEvent) {
    const t = event.target as SVGElement;
    if (t === svgEl || t.tagName === 'svg') { if (activeCluster) collapseCluster(); }
  });

  // Event listeners
  const closeBtnEl = document.getElementById('aos-panel-close-btn');
  const backdropEl = document.getElementById('aos-panel-backdrop');
  const transformBtnEl = document.getElementById('aos-show-transform-btn');
  closeBtnEl?.addEventListener('click', closePanel);
  backdropEl?.addEventListener('click', closePanel);
  transformBtnEl?.addEventListener('click', () => {
    const prompt = document.getElementById('aos-gap-transition-prompt');
    if (prompt) { (prompt as HTMLElement).style.opacity = '0'; (prompt as HTMLElement).style.pointerEvents = 'none'; }
    transformToStructured();
  });

  // Escape key closes panel + adds a11y
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') closePanel();
  }
  document.addEventListener('keydown', onKeyDown);

  // ResizeObserver
  const ro = new ResizeObserver(() => {
    width = container!.clientWidth; height = container!.clientHeight;
    clusterNodes.forEach(node => {
      const cluster = AI_OS_CLUSTERS.find(c => c.id === node.id);
      if (cluster) { node.structuredX = cluster.structuredPos.x * width; node.structuredY = cluster.structuredPos.y * height; }
      if (isStructuredMode) { node.fx = node.structuredX; node.fy = node.structuredY; }
    });
    simulation?.force('center', d3.forceCenter(width / 2, height / 2 - 60));
    simulation?.alpha(0.3).restart();
    cachedSvgRect = svgEl!.getBoundingClientRect();
    cachedGraphRect = container!.getBoundingClientRect();
  });
  ro.observe(container);

  // Expose transformToChaos for external use
  (window as any).__aosTransformToChaos = transformToChaos;

  return () => {
    simulation?.stop();
    if (driftHandle) gsap.ticker.remove(driftHandle);
    ro.disconnect();
    document.removeEventListener('keydown', onKeyDown);
    closeBtnEl?.removeEventListener('click', closePanel);
    backdropEl?.removeEventListener('click', closePanel);
    delete (window as any).__aosTransformToChaos;
  };
}
