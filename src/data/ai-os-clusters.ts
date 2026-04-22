// AI OS Cluster data — ported from nichefinders-ai-os-partner-program/index.html
// Source: lines 1542–4152 of the original HTML

export interface AIClusterComponent {
  id: string;
  name: string;
  shortDesc: string;
  connections: string[];
  consequence?: string;
  chaosHTML: string;
  structuredHTML: string;
}

export interface AICluster {
  id: string;
  name: string;
  color: string;
  structuredPos: { x: number; y: number };
  chaosTooltip: string;
  structuredTooltip: string;
  clusterConnections: string[];
  components: AIClusterComponent[];
}

export const AI_OS_CLUSTERS: AICluster[] = [
  /* ============================================================
     CLUSTER 1 — LEADERSHIP
  ============================================================ */
  {
    id: "leadership",
    name: "Leadership",
    color: "#8B5CF6",
    structuredPos: { x: 0.50, y: 0.14 },
    chaosTooltip: "Direction set by gut feeling, no written plan",
    structuredTooltip: "Clear vision, OKRs, and decision frameworks driving every layer",
    clusterConnections: ["sales-cycle","finance","operations","people-workforce"],
    components: [
      {
        id: "vision-mission",
        name: "Vision & Mission",
        shortDesc: "Define where the company is going and why it exists",
        connections: ["strategic-planning","company-culture","okrs"],
        consequence: "Without a written vision, every decision defaults to short-term survival. AI cannot prioritize work toward a destination that has never been defined.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>The vision lives in the owner's head: "grow the business, do good work, make money." Nothing written. New hires guess at priorities. Team pulls in three directions. Owner is the company's only north star — and that doesn't scale.</p></div>`,
        structuredHTML: `<div class="data-label">Vision & Mission Document</div><div class="data-card"><div class="data-card-title">Vision Statement</div><div style="font-size:0.88rem;color:#e5e7eb;line-height:1.6;margin-top:0.3rem;">"To be the most trusted home services partner in the region — the company families call first, employees are proud to work for, and competitors study."</div></div><div class="data-card"><div class="data-card-title">Mission Statement</div><div style="font-size:0.88rem;color:#e5e7eb;line-height:1.6;margin-top:0.3rem;">"We solve problems with speed, honesty, and craftsmanship — protecting families and protecting owners from chaos."</div></div><div class="data-label">Core Values</div><ul class="checklist"><li><span class="check-icon check-green">✓</span><span>Ownership — we finish what we start, no excuses</span></li><li><span class="check-icon check-green">✓</span><span>Transparency — honest pricing, honest timelines</span></li><li><span class="check-icon check-green">✓</span><span>Craftsmanship — we'd do the job in our own home</span></li><li><span class="check-icon check-green">✓</span><span>Growth — every team member advances or we failed them</span></li></ul>`
      },
      {
        id: "strategic-planning",
        name: "Strategic Planning",
        shortDesc: "Annual and quarterly planning tied to measurable outcomes",
        connections: ["okrs","vision-mission","risk-management","budget-forecasting"],
        consequence: "Without a strategic plan, the business reacts to the loudest problem. AI recommendations have no context for what matters most this quarter.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Planning happens in January over dinner. "We want to hit $2M and hire two more people." No milestones, no owner. By March it's forgotten. Same goals recycled every year. No one is accountable to the plan because there is no written plan.</p></div>`,
        structuredHTML: `<div class="data-label">Strategic Plan — Sample</div><table class="data-table"><thead><tr><th>Initiative</th><th>Owner</th><th>Q Target</th><th>Status</th></tr></thead><tbody><tr><td class="val-white">New service line launch</td><td>Ops Lead</td><td>Q1</td><td><span class="badge badge-green">On Track</span></td></tr><tr><td class="val-white">Hire 2 senior techs</td><td>HR</td><td>Q2</td><td><span class="badge badge-amber">At Risk</span></td></tr><tr><td class="val-white">Deploy field service software</td><td>Tech Lead</td><td>Q1</td><td><span class="badge badge-green">Complete</span></td></tr><tr><td class="val-white">Reach annual revenue target</td><td>Owner</td><td>Q4</td><td><span class="badge badge-blue">In Progress</span></td></tr></tbody></table>`
      },
      {
        id: "okrs",
        name: "OKRs & Goal Setting",
        shortDesc: "Objectives and key results cascaded across the organization",
        connections: ["strategic-planning","owner-accountability","data-reporting"],
        consequence: "Without OKRs, goals are wishes. No shared scorecard means no shared urgency. AI cannot surface performance gaps when the target was never written down.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Goals are verbal. "Hit more revenue, get more reviews." Nobody tracks weekly. Owner checks revenue once a month when the accountant sends a report — usually 6 weeks after the month ended. No one owns any metric.</p></div>`,
        structuredHTML: `<div class="data-label">Q1 OKRs — Sample</div><table class="data-table"><thead><tr><th>Objective</th><th>Key Result</th><th>Progress</th><th>Owner</th></tr></thead><tbody><tr><td class="val-white">Grow Revenue</td><td>Hit quarterly target</td><td class="val-green">74%</td><td>Owner</td></tr><tr><td class="val-white">Grow Revenue</td><td>Close rate ≥ 65%</td><td class="val-amber">61%</td><td>Sales Lead</td></tr><tr><td class="val-white">Win Reputation</td><td>25 new Google reviews</td><td class="val-green">18/25</td><td>Ops</td></tr><tr><td class="val-white">Build Team</td><td>0 tech turnover Q1</td><td class="val-green">On Track</td><td>HR</td></tr></tbody></table>`
      },
      {
        id: "owner-accountability",
        name: "Owner Accountability",
        shortDesc: "Systems that keep the owner working ON the business, not just IN it",
        connections: ["okrs","advisory-board","decision-framework","strategic-planning"],
        consequence: "An owner buried in daily operations has no time to lead. AI tools built for a leader go unused when the leader is managing every task personally.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Owner works 60+ hour weeks. Answers every call. Writes every estimate. Approves every purchase. Business cannot function for 3 days without them. There is no accountability to anyone — no board, no coach, no scorecard. Growth ceiling is one person's bandwidth.</p></div>`,
        structuredHTML: `<div class="data-label">Owner Time Audit — Weekly Allocation</div><table class="data-table"><thead><tr><th>Activity Type</th><th>Target %</th><th>Actual %</th><th>Status</th></tr></thead><tbody><tr><td class="val-white">Strategic / Leadership</td><td>40%</td><td class="val-green">38%</td><td><span class="badge badge-green">Good</span></td></tr><tr><td class="val-white">Sales & Estimates</td><td>20%</td><td class="val-amber">27%</td><td><span class="badge badge-amber">High</span></td></tr><tr><td class="val-white">Field / Technical</td><td>10%</td><td class="val-red">22%</td><td><span class="badge badge-red">Too High</span></td></tr><tr><td class="val-white">Finance Review</td><td>15%</td><td class="val-green">13%</td><td><span class="badge badge-green">Good</span></td></tr></tbody></table>`
      },
      {
        id: "company-culture",
        name: "Company Culture",
        shortDesc: "Defined values, rituals, and team identity that attract and retain talent",
        connections: ["vision-mission","hiring","employee-onboarding","retention"],
        consequence: "Culture without documentation is folklore. What the founder believes becomes unrecognizable by hire #10. AI-assisted hiring and onboarding requires culture to be codified.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Culture is "we treat each other like family." No written values. No onboarding culture orientation. New hires absorb whatever the loudest team member projects. Two employees undermine each other — owner handles it case by case with no standard.</p></div>`,
        structuredHTML: `<div class="data-label">Culture Health — Last 90 Days</div><div class="data-grid-2"><div class="data-card"><div class="data-card-title">Team eNPS</div><div class="data-card-value">+61</div><div class="data-card-sub">8 responses</div></div><div class="data-card"><div class="data-card-title">Voluntary Turnover</div><div class="data-card-value">0%</div><div class="data-card-sub">Rolling 12 months</div></div></div><div class="data-label">Culture Rituals</div><ul class="checklist"><li><span class="check-icon check-green">✓</span><span>Weekly team huddle (15 min)</span></li><li><span class="check-icon check-green">✓</span><span>Monthly recognition + reward</span></li><li><span class="check-icon check-green">✓</span><span>Quarterly team event</span></li><li><span class="check-icon check-green">✓</span><span>Values card distributed to all team</span></li></ul>`
      },
      {
        id: "decision-framework",
        name: "Decision Framework",
        shortDesc: "Documented criteria for how decisions get made at each level",
        connections: ["owner-accountability","strategic-planning","risk-management","sops"],
        consequence: "When every decision requires the owner, growth stops at one person's availability. AI escalation logic has no framework to route decisions correctly.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>All decisions go to the owner. Team members call about small purchases. Office manager texts about minor refunds. Owner makes calls while driving. Decisions are inconsistent — same scenario, different answer. Team stops trusting the process because there is no process.</p></div>`,
        structuredHTML: `<div class="data-label">Decision Authority Matrix</div><table class="data-table"><thead><tr><th>Decision Type</th><th>Threshold</th><th>Authority</th></tr></thead><tbody><tr><td class="val-white">Supply purchase</td><td>≤ $250</td><td>Tech (no approval)</td></tr><tr><td class="val-white">Supply purchase</td><td>$251–$1,000</td><td>Lead Tech</td></tr><tr><td class="val-white">Supply purchase</td><td>> $1,000</td><td>Owner</td></tr><tr><td class="val-white">Customer refund/credit</td><td>≤ $150</td><td>Office Manager</td></tr><tr><td class="val-white">Customer refund/credit</td><td>> $150</td><td>Owner</td></tr></tbody></table>`
      },
      {
        id: "risk-management",
        name: "Risk Management",
        shortDesc: "Identify, score, and mitigate top business risks before they become crises",
        connections: ["strategic-planning","compliance-legal","advisory-board"],
        consequence: "Unmanaged risk means one bad month — one lawsuit, one key employee leaving — can collapse years of margin. AI cannot hedge risks it cannot see.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Risk management means "hope nothing goes wrong." Owner has never written down what could sink the business. Key employee is the only one who knows critical systems — if they leave, the company loses those jobs. No succession plan. No contingency fund documented.</p></div>`,
        structuredHTML: `<div class="data-label">Risk Register</div><table class="data-table"><thead><tr><th>Risk</th><th>Likelihood</th><th>Impact</th><th>Mitigation</th></tr></thead><tbody><tr><td class="val-white">Key tech departure</td><td class="val-red">High</td><td class="val-red">Critical</td><td>Cross-training program active</td></tr><tr><td class="val-white">Fleet breakdown in peak season</td><td class="val-amber">Med</td><td class="val-amber">High</td><td>Preventive schedule + backup rental</td></tr><tr><td class="val-white">Cash flow squeeze</td><td class="val-amber">Med</td><td class="val-red">High</td><td>60-day reserve + AR aging alerts</td></tr><tr><td class="val-white">Liability claim</td><td class="val-green">Low</td><td class="val-red">Critical</td><td>QC checklist + liability policy</td></tr></tbody></table>`
      },
      {
        id: "advisory-board",
        name: "Advisory Board",
        shortDesc: "External advisors who challenge the owner and expand strategic thinking",
        connections: ["owner-accountability","risk-management","strategic-planning"],
        consequence: "Owners without outside perspective repeat the same mistakes and miss macro shifts. AI insights are only as good as the questions being asked — and isolated owners ask narrow questions.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Owner gets advice from friends and family. No structured outside input. Accountant meets once a year. Business coach stopped after three sessions. Every major decision is made alone.</p></div>`,
        structuredHTML: `<div class="data-label">Advisory Board</div><table class="data-table"><thead><tr><th>Advisor</th><th>Expertise</th><th>Meeting Cadence</th></tr></thead><tbody><tr><td class="val-white">Business Coach</td><td>Business coaching / ops</td><td>Monthly</td></tr><tr><td class="val-white">CPA</td><td>Tax &amp; financial strategy</td><td>Quarterly</td></tr><tr><td class="val-white">Industry Expert</td><td>Market &amp; M&amp;A</td><td>Bi-annual</td></tr><tr><td class="val-white">HR Advisor</td><td>HR &amp; employment law</td><td>As needed</td></tr></tbody></table>`
      }
    ]
  },

  /* ============================================================
     CLUSTER 2 — SALES CYCLE
  ============================================================ */
  {
    id: "sales-cycle",
    name: "Sales Cycle",
    color: "#F59E0B",
    structuredPos: { x: 0.72, y: 0.22 },
    chaosTooltip: "Leads slip through cracks, no pipeline visibility",
    structuredTooltip: "Every lead tracked, pipeline visible, close rate improving weekly",
    clusterConnections: ["marketing","customer-experience","finance","leadership"],
    components: [
      {
        id: "lead-management",
        name: "Lead Management",
        shortDesc: "Capture, assign, and respond to every inbound lead without dropping one",
        connections: ["crm","sales-pipeline","follow-up-system","marketing"],
        consequence: "Every untracked lead is money left on the table. AI lead scoring and routing requires a structured intake system — chaos means AI amplifies the chaos.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Leads come in by phone, text, social, and web form — all to different places. Owner sees some. Office misses others. Multiple texts went unanswered for 18+ hours last week. No lead log. No assignment system. Customers called competitors during the wait.</p></div>`,
        structuredHTML: `<div class="data-label">Lead Intake — Last 30 Days</div><table class="data-table"><thead><tr><th>Source</th><th>Volume</th><th>Avg Response</th><th>Converted</th></tr></thead><tbody><tr><td class="val-white">Phone (main line)</td><td>67</td><td class="val-green">&lt; 2 min</td><td class="val-green">54 (81%)</td></tr><tr><td class="val-white">Google LSA</td><td>28</td><td class="val-green">&lt; 5 min</td><td class="val-green">22 (79%)</td></tr><tr><td class="val-white">Website form</td><td>14</td><td class="val-amber">18 min</td><td class="val-amber">9 (64%)</td></tr><tr><td class="val-white">Referral / text</td><td>11</td><td class="val-green">&lt; 8 min</td><td class="val-green">10 (91%)</td></tr></tbody></table>`
      },
      {
        id: "sales-pipeline",
        name: "Sales Pipeline",
        shortDesc: "Visual stage-by-stage view of every active deal and its value",
        connections: ["lead-management","estimating","crm","close-rate"],
        consequence: "Without a visible pipeline, revenue cannot be forecast. AI scheduling cannot optimize for jobs that haven't been tracked.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Pipeline is a mental image. Owner knows the big jobs he's waiting on. Small ones fall through. Estimating happens on paper. No follow-up trigger. Quote sent = job forgotten until customer calls back. Revenue forecasting is impossible.</p></div>`,
        structuredHTML: `<div class="data-label">Active Pipeline</div><div class="kanban-col"><div class="kanban-col-label">Quote Sent (5)</div><div class="kanban-deal"><div class="kanban-deal-name">HVAC Replacement</div><div class="kanban-deal-meta">$8,400 · Sent this week · Follow-up: Day 2</div></div><div class="kanban-deal"><div class="kanban-deal-name">Full Repipe</div><div class="kanban-deal-meta">$11,700 · Sent this week · Follow-up: Day 2</div></div></div><div class="data-card"><div class="data-card-title">Pipeline Value</div><div class="data-card-value">$34,280</div><div class="data-card-sub">11 open opportunities · Avg age: 6.2 days</div></div>`
      },
      {
        id: "estimating",
        name: "Estimating & Quoting",
        shortDesc: "Consistent, profitable estimates delivered fast with clear scope",
        connections: ["sales-pipeline","pricing-strategy","job-costing","proposal-creation"],
        consequence: "Inconsistent estimates create unpredictable margins. AI cannot improve pricing strategy when every estimate is calculated differently each time.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Owner estimates from memory. Same job quoted at different prices depending on how busy the week is. No written pricing guide. Techs in the field quote small add-ons verbally with no record. Multiple jobs last quarter were under-quoted. No audit trail.</p></div>`,
        structuredHTML: `<div class="data-label">Estimate Performance</div><table class="data-table"><thead><tr><th>Job Type</th><th>Avg Quote</th><th>Avg Actual</th><th>Variance</th><th>Margin</th></tr></thead><tbody><tr><td class="val-white">HVAC Replacement</td><td>$7,840</td><td>$7,620</td><td class="val-green">+2.9%</td><td class="val-green">42%</td></tr><tr><td class="val-white">Water Heater</td><td>$1,880</td><td>$1,920</td><td class="val-amber">-2.1%</td><td class="val-amber">38%</td></tr><tr><td class="val-white">Drain Cleaning</td><td>$310</td><td>$295</td><td class="val-green">+5.1%</td><td class="val-green">67%</td></tr></tbody></table>`
      },
      {
        id: "follow-up-system",
        name: "Follow-Up System",
        shortDesc: "Automated and human touchpoints that keep quoted jobs moving to close",
        connections: ["sales-pipeline","crm","lead-management","close-rate"],
        consequence: "Most jobs are lost not to price but to silence. Without a follow-up system, competitors win while you're on another job. AI cannot follow up on quotes it doesn't know exist.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Follow-up means hoping the customer calls back. No reminder system. Owner forgets quotes from two weeks ago. If the customer doesn't call, the job is assumed lost. Thousands of dollars in quotes never followed up — customers hired competitors.</p></div>`,
        structuredHTML: `<div class="data-label">Follow-Up Sequence — Active Quotes</div><table class="data-table"><thead><tr><th>Step</th><th>Timing</th><th>Method</th><th>Completion</th></tr></thead><tbody><tr><td class="val-white">Proposal confirmation</td><td>Same day</td><td>Auto email</td><td class="val-green">100%</td></tr><tr><td class="val-white">Check-in call</td><td>Day 2</td><td>Human (office)</td><td class="val-green">94%</td></tr><tr><td class="val-white">Value reminder</td><td>Day 4</td><td>Auto text</td><td class="val-green">100%</td></tr><tr><td class="val-white">Last chance</td><td>Day 7</td><td>Auto email</td><td class="val-green">100%</td></tr></tbody></table>`
      },
      {
        id: "close-rate",
        name: "Close Rate Tracking",
        shortDesc: "Measure the percentage of quotes that convert to booked jobs",
        connections: ["sales-pipeline","estimating","follow-up-system"],
        consequence: "You cannot improve what you don't measure. Without close rate data, you have no idea if pricing, proposals, or salesmanship is the problem.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Close rate is unknown. Owner estimates "we close most of the ones we quote." No records. No tracking. Seasonal swings blamed on "it was a slow month." Cannot identify which team member has the lowest close rate.</p></div>`,
        structuredHTML: `<div class="data-label">Close Rate by Team Member</div><table class="data-table"><thead><tr><th>Rep</th><th>Quotes</th><th>Closed</th><th>Rate</th><th>Avg Ticket</th></tr></thead><tbody><tr><td class="val-white">Top Performer</td><td>18</td><td>14</td><td class="val-green">78%</td><td>$2,140</td></tr><tr><td class="val-white">Mid Performer</td><td>15</td><td>8</td><td class="val-red">53%</td><td>$1,490</td></tr></tbody></table><div class="data-card"><div class="data-card-title">Company Close Rate</div><div class="data-card-value">69%</div><div class="data-card-sub">Target: 72% · Gap: 3 points</div></div>`
      },
      {
        id: "crm",
        name: "CRM System",
        shortDesc: "A single system of record for every customer, lead, and interaction",
        connections: ["lead-management","sales-pipeline","follow-up-system"],
        consequence: "Without a CRM, customer history lives in employees' heads. When someone leaves, the relationship leaves too. AI personalization requires structured customer data.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Customer info is split across phone contacts, invoices, spreadsheets, and personal cells. No unified record. When a customer calls back, the office has to ask them to repeat their address and problem. History is lost. Every call starts from zero.</p></div>`,
        structuredHTML: `<div class="data-label">CRM Snapshot</div><div class="data-grid-3"><div class="data-card"><div class="data-card-title">Total Customers</div><div class="data-card-value">1,847</div><div class="data-card-sub">Active records</div></div><div class="data-card"><div class="data-card-title">Repeat Rate</div><div class="data-card-value">64%</div><div class="data-card-sub">Returning in 24 mo</div></div><div class="data-card"><div class="data-card-title">Avg Lifetime</div><div class="data-card-value">4.2 yrs</div><div class="data-card-sub">Per customer</div></div></div>`
      }
    ]
  },

  /* ============================================================
     CLUSTER 3 — MARKETING
  ============================================================ */
  {
    id: "marketing",
    name: "Marketing",
    color: "#06B6D4",
    structuredPos: { x: 0.84, y: 0.40 },
    chaosTooltip: "Random posts, no strategy, no idea what's working",
    structuredTooltip: "Every channel tracked, every dollar attributed, pipeline fed consistently",
    clusterConnections: ["sales-cycle","customer-retention","customer-experience"],
    components: [
      {
        id: "gbp",
        name: "Google Business Profile",
        shortDesc: "Optimized GBP driving local map pack visibility and inbound calls",
        connections: ["website-seo","reputation-mgmt","paid-ads"],
        consequence: "GBP is the #1 source of inbound leads for local businesses. An unoptimized profile is invisible. AI content tools need a structured profile to push updates to.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>GBP claimed but never optimized. Last post was 8 months ago. Hours listed incorrectly. No service area defined. Only 31 reviews — never responds to them. Showing up on page 2 for primary keywords.</p></div>`,
        structuredHTML: `<div class="data-label">Google Business Profile — Health Score</div><div class="data-grid-2"><div class="data-card"><div class="data-card-title">Total Reviews</div><div class="data-card-value">214</div><div class="data-card-sub">4.8 ★ avg</div></div><div class="data-card"><div class="data-card-title">Monthly Calls (GBP)</div><div class="data-card-value">187</div><div class="data-card-sub">This month</div></div></div><ul class="checklist"><li><span class="check-icon check-green">✓</span><span>All services listed with descriptions</span></li><li><span class="check-icon check-green">✓</span><span>Weekly GBP posts (auto-scheduled)</span></li><li><span class="check-icon check-green">✓</span><span>Every review responded to within 24 hrs</span></li><li><span class="check-icon check-green">✓</span><span>Photos updated monthly</span></li></ul>`
      },
      {
        id: "website-seo",
        name: "Website & SEO",
        shortDesc: "A fast, optimized website ranking for buyer-intent local keywords",
        connections: ["gbp","content-strategy","paid-ads"],
        consequence: "A slow or unoptimized website leaks every marketing dollar spent driving traffic to it. AI-generated content needs a site architecture to land in.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Website built years ago. Mobile score: 38/100. No local landing pages. Contact form goes to a Gmail nobody checks daily. Zero keyword strategy. Ranks for the company name and nothing else. Analytics was never set up.</p></div>`,
        structuredHTML: `<div class="data-label">Website Performance</div><div class="data-grid-3"><div class="data-card"><div class="data-card-title">Organic Visits</div><div class="data-card-value">2,140</div><div class="data-card-sub">+31% YoY</div></div><div class="data-card"><div class="data-card-title">Mobile Score</div><div class="data-card-value">91</div><div class="data-card-sub">PageSpeed</div></div><div class="data-card"><div class="data-card-title">Leads from Site</div><div class="data-card-value">84</div><div class="data-card-sub">This month</div></div></div>`
      },
      {
        id: "reputation-mgmt",
        name: "Reputation Management",
        shortDesc: "Proactive review generation and rapid response to protect brand trust",
        connections: ["gbp","post-job-followup","nps-tracking"],
        consequence: "One unanswered 1-star review can cost 30 leads. AI reputation tools need a review database and response protocol to operate from.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>31 Google reviews total after years in business. Never asks for reviews. One 1-star from 2022 sits unanswered at the top. Owner saw it, got angry, did nothing. Three happy customers mentioned they would leave a review "sometime."</p></div>`,
        structuredHTML: `<div class="data-label">Reputation Dashboard</div><div class="data-grid-2"><div class="data-card"><div class="data-card-title">Google Reviews</div><div class="data-card-value">214 · 4.8★</div><div class="data-card-sub">+18 new this month</div></div><div class="data-card"><div class="data-card-title">Response Rate</div><div class="data-card-value">100%</div><div class="data-card-sub">Avg response: 6 hrs</div></div></div>`
      },
      {
        id: "paid-ads",
        name: "Paid Advertising",
        shortDesc: "Google LSA, PPC, and targeted ads that generate profitable inbound leads",
        connections: ["website-seo","gbp","lead-management"],
        consequence: "Without tracking, paid ads are a coin flip. AI bid optimization requires conversion data and cost-per-lead tracking to operate at all.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Tried Google Ads once — spent money, "didn't seem to work," canceled. No idea what the actual results were because no tracking was set up. Phone calls from ads go to same line as everything else — no attribution.</p></div>`,
        structuredHTML: `<div class="data-label">Paid Ads Performance</div><table class="data-table"><thead><tr><th>Channel</th><th>Spend</th><th>Leads</th><th>CPL</th><th>Revenue</th></tr></thead><tbody><tr><td class="val-white">Google LSA</td><td>$1,840</td><td>28</td><td class="val-green">$65.71</td><td class="val-green">$38,400</td></tr><tr><td class="val-white">Google Ads</td><td>$2,200</td><td>31</td><td class="val-amber">$70.97</td><td class="val-green">$42,100</td></tr></tbody></table><div class="data-card"><div class="data-card-title">Blended ROAS</div><div class="data-card-value">19.6x</div><div class="data-card-sub">Total spend → attributed revenue</div></div>`
      }
    ]
  },

  /* ============================================================
     CLUSTER 4 — CUSTOMER EXPERIENCE
  ============================================================ */
  {
    id: "customer-experience",
    name: "Customer Experience",
    color: "#EC4899",
    structuredPos: { x: 0.78, y: 0.60 },
    chaosTooltip: "Inconsistent service leaves customers unsure what to expect",
    structuredTooltip: "Every touchpoint scripted and measured — customers rave and refer",
    clusterConnections: ["sales-cycle","operations","customer-retention","marketing"],
    components: [
      {
        id: "customer-journey",
        name: "Customer Journey Map",
        shortDesc: "Document every touchpoint from first contact to post-job follow-up",
        connections: ["comm-standards","appt-scheduling","onsite-prof","post-job-followup"],
        consequence: "Without a journey map, every team member improvises. AI cannot optimize a customer experience that has never been defined end to end.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>No journey map exists. Office greets callers differently. Techs show up with varying levels of professionalism. Some send a text before arrival, some don't. Customer experience is a lottery.</p></div>`,
        structuredHTML: `<div class="data-label">Customer Journey — Standard (8 Stages)</div><table class="data-table"><thead><tr><th>Stage</th><th>Touchpoint</th><th>Owner</th><th>Satisfaction</th></tr></thead><tbody><tr><td class="val-white">1. Discovery</td><td>Google search / referral</td><td>Marketing</td><td class="val-green">4.9★</td></tr><tr><td class="val-white">2. First Contact</td><td>Phone answered in 3 rings</td><td>Office</td><td class="val-green">4.8★</td></tr><tr><td class="val-white">3. Booking</td><td>Same-day confirmation text</td><td>Auto</td><td class="val-green">4.9★</td></tr><tr><td class="val-white">4. Day-of Reminder</td><td>2hr arrival window text</td><td>Auto</td><td class="val-green">4.8★</td></tr><tr><td class="val-white">5. On-Site</td><td>Shoe covers, mat, diagnosis</td><td>Tech</td><td class="val-amber">4.6★</td></tr><tr><td class="val-white">6. Resolution</td><td>Walk-through + invoice</td><td>Tech</td><td class="val-green">4.8★</td></tr><tr><td class="val-white">7. Payment</td><td>Card / digital / financing</td><td>Auto</td><td class="val-green">4.9★</td></tr><tr><td class="val-white">8. Follow-Up</td><td>Review request + 30-day check</td><td>Auto</td><td class="val-green">4.7★</td></tr></tbody></table>`
      },
      {
        id: "post-job-followup",
        name: "Post-Job Follow-Up",
        shortDesc: "Automated sequence after job completion to gather feedback, reviews, and next appointments",
        connections: ["customer-journey","reputation-mgmt","nps-tracking"],
        consequence: "The 48 hours after a job is the highest-value window for reviews, upsells, and referrals. Without automation, this window closes silently every single time.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>No post-job follow-up. Job is done, invoice sent, done. No thank-you. No review request. No check-in. Customers don't call if something goes wrong — they just leave a bad review or never come back.</p></div>`,
        structuredHTML: `<div class="data-label">Post-Job Sequence — Automated</div><table class="data-table"><thead><tr><th>Timing</th><th>Message</th><th>Goal</th><th>Conversion</th></tr></thead><tbody><tr><td class="val-white">2 hrs after close</td><td>Thank you + invoice link</td><td>Payment</td><td class="val-green">94%</td></tr><tr><td class="val-white">24 hrs after close</td><td>How did we do?</td><td>Feedback</td><td class="val-green">64%</td></tr><tr><td class="val-white">48 hrs after close</td><td>Google review request (4+ CSAT)</td><td>Review</td><td class="val-green">28%</td></tr><tr><td class="val-white">30 days after</td><td>Seasonal reminder / next service</td><td>Rebook</td><td class="val-amber">11%</td></tr></tbody></table>`
      },
      {
        id: "nps-tracking",
        name: "NPS Tracking",
        shortDesc: "Net Promoter Score measured consistently to track loyalty trends over time",
        connections: ["feedback-system","customer-journey"],
        consequence: "NPS is the single most predictive metric for referral growth. Without it, you are flying blind on the one number that determines whether word-of-mouth grows or shrinks.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>NPS has never been calculated. No survey sent. No benchmark. Cannot tell if the business is getting more or less loyal customers. The 50-point gap between a struggling and thriving NPS is invisible.</p></div>`,
        structuredHTML: `<div class="data-label">NPS Tracking</div><div class="data-grid-3"><div class="data-card"><div class="data-card-title">Current NPS</div><div class="data-card-value">+76</div><div class="data-card-sub">Industry avg: +42</div></div><div class="data-card"><div class="data-card-title">Promoters</div><div class="data-card-value">84%</div><div class="data-card-sub">Score 9–10</div></div><div class="data-card"><div class="data-card-title">Detractors</div><div class="data-card-value">8%</div><div class="data-card-sub">Score 0–6</div></div></div>`
      }
    ]
  },

  /* ============================================================
     CLUSTER 5 — FINANCE
  ============================================================ */
  {
    id: "finance",
    name: "Finance",
    color: "#10B981",
    structuredPos: { x: 0.64, y: 0.76 },
    chaosTooltip: "Numbers are a mystery until the accountant calls",
    structuredTooltip: "Real-time financial visibility with job-level profitability on demand",
    clusterConnections: ["operations","leadership","technology-systems","compliance-legal"],
    components: [
      {
        id: "job-costing",
        name: "Job Costing",
        shortDesc: "Track estimated vs actual costs per job to know exactly which jobs make money",
        connections: ["estimating","pricing-strategy","pl-management"],
        consequence: "Without visible job costing, you don't know which jobs make money. AI cannot optimize what you cannot measure.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Job costs tracked in the owner's head or separate spreadsheets nobody updates. No comparison between estimate and actual. Multiple jobs last quarter were profitable on paper but lost money when labor overruns were counted.</p></div>`,
        structuredHTML: `<div class="data-label">Job Cost Report</div><table class="data-table"><thead><tr><th>Job</th><th>Revenue</th><th>Labor</th><th>Materials</th><th>Gross Margin</th></tr></thead><tbody><tr><td class="val-white">HVAC replacement</td><td>$8,400</td><td>$2,100</td><td>$2,800</td><td class="val-green">$3,500 (42%)</td></tr><tr><td class="val-white">Water heater install</td><td>$1,920</td><td>$480</td><td>$640</td><td class="val-green">$800 (42%)</td></tr><tr><td class="val-white">Full repipe</td><td>$10,100</td><td>$3,800</td><td>$3,400</td><td class="val-amber">$2,900 (29%)</td></tr></tbody></table><div class="data-card"><div class="data-card-title">Month-to-Date Blended Margin</div><div class="data-card-value">43.8%</div><div class="data-card-sub">Target: 42%</div></div>`
      },
      {
        id: "pl-management",
        name: "P&L Management",
        shortDesc: "Monthly profit and loss visibility with variance tracking against budget",
        connections: ["job-costing","budget-forecasting","cash-flow"],
        consequence: "An owner who sees P&L once a year is flying blind for 11 months. AI financial advisory requires monthly, categorized P&L data to generate actionable insights.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>P&L reviewed once a year when the CPA prepares taxes. Owner knows bank balance and "roughly how much is coming in." Overhead percentages unknown. No comparison to prior year.</p></div>`,
        structuredHTML: `<div class="data-label">P&L Summary — Sample Month</div><table class="data-table"><thead><tr><th>Category</th><th>Actual</th><th>Budget</th><th>Variance</th></tr></thead><tbody><tr><td class="val-white">Revenue</td><td class="val-white">$174,200</td><td>$168,000</td><td class="val-green">+3.7%</td></tr><tr><td class="val-white">Labor (COGS)</td><td>$52,800</td><td>$53,760</td><td class="val-green">-1.8%</td></tr><tr><td class="val-white">Gross Profit</td><td class="val-green">$83,300 (47.8%)</td><td>$77,280</td><td class="val-green">+7.8%</td></tr><tr><td class="val-white">Net Operating Income</td><td class="val-green">$42,100 (24.2%)</td><td>$35,280</td><td class="val-green">+19.3%</td></tr></tbody></table>`
      },
      {
        id: "cash-flow",
        name: "Cash Flow Management",
        shortDesc: "13-week cash flow forecast ensuring the business never runs out of operating cash",
        connections: ["accounts-receivable","budget-forecasting","pl-management"],
        consequence: "Profitable businesses fail from cash flow problems. Without a rolling forecast, payroll surprises turn into panic.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Cash flow managed by watching the bank account. Owner panics when balance dips below a threshold. Paid a supplier late multiple times. Doesn't know the difference between profit and cash flow.</p></div>`,
        structuredHTML: `<div class="data-label">13-Week Cash Flow Forecast</div><table class="data-table"><thead><tr><th>Week</th><th>Starting Cash</th><th>In</th><th>Out</th><th>Ending Cash</th></tr></thead><tbody><tr><td class="val-white">Week 1</td><td>$84,200</td><td>$38,400</td><td>$31,800</td><td class="val-green">$90,800</td></tr><tr><td class="val-white">Week 2</td><td>$90,800</td><td>$41,200</td><td>$44,100</td><td class="val-amber">$87,900</td></tr><tr><td class="val-white">Week 3</td><td>$87,900</td><td>$36,800</td><td>$28,400</td><td class="val-green">$96,300</td></tr></tbody></table>`
      },
      {
        id: "budget-forecasting",
        name: "Budget & Forecasting",
        shortDesc: "Annual budget with monthly re-forecasting to keep the business on track all year",
        connections: ["pl-management","cash-flow","strategic-planning"],
        consequence: "Without a budget, every expense is a surprise and every month is a mystery. AI financial planning requires a baseline budget to measure variance against.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>No formal budget. Owner estimates revenue by gut and history. Expenses are not categorized against any plan. Cannot tell if marketing spend is over or under budget because there is no budget.</p></div>`,
        structuredHTML: `<div class="data-label">Annual Budget vs Actuals — YTD</div><table class="data-table"><thead><tr><th>Line Item</th><th>Annual Budget</th><th>YTD Budget</th><th>YTD Actual</th><th>Variance</th></tr></thead><tbody><tr><td class="val-white">Revenue</td><td>$2,280,000</td><td>$380,000</td><td class="val-green">$394,400</td><td class="val-green">+3.8%</td></tr><tr><td class="val-white">Labor</td><td>$684,000</td><td>$114,000</td><td class="val-amber">$118,200</td><td class="val-amber">+3.7%</td></tr><tr><td class="val-white">Marketing</td><td>$91,200</td><td>$15,200</td><td class="val-green">$14,800</td><td class="val-green">-2.6%</td></tr></tbody></table>`
      }
    ]
  },

  /* ============================================================
     CLUSTER 6 — OPERATIONS
  ============================================================ */
  {
    id: "operations",
    name: "Operations",
    color: "#F97316",
    structuredPos: { x: 0.48, y: 0.83 },
    chaosTooltip: "Jobs managed by text, whiteboard, and hope",
    structuredTooltip: "Every job tracked, dispatched, and quality-checked in real time",
    clusterConnections: ["fleet-equipment","people-workforce","technology-systems","finance","processes-docs"],
    components: [
      {
        id: "scheduling-dispatch",
        name: "Scheduling & Dispatch",
        shortDesc: "Optimized daily schedule that maximizes tech utilization and minimizes drive time",
        connections: ["job-management","field-service-sw","fleet-equipment"],
        consequence: "Poor dispatch wastes 1–2 hours of tech time per day. That's significant lost capacity per year. AI dispatch optimization needs GPS, job duration, and real-time status data.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Dispatch is a whiteboard and a lot of phone calls. Office calls each tech in the morning with the day's jobs. Techs sometimes drive 40 minutes between jobs that are 8 minutes apart. No optimization. Double-bookings happen regularly.</p></div>`,
        structuredHTML: `<div class="data-label">Dispatch Board</div><table class="data-table"><thead><tr><th>Tech</th><th>Jobs Today</th><th>Drive Time</th><th>Revenue Scheduled</th><th>Status</th></tr></thead><tbody><tr><td class="val-white">Tech 1</td><td>4</td><td>38 min</td><td>$3,840</td><td><span class="badge badge-green">On Schedule</span></td></tr><tr><td class="val-white">Tech 2</td><td>3</td><td>42 min</td><td>$2,640</td><td><span class="badge badge-green">On Schedule</span></td></tr><tr><td class="val-white">Tech 3</td><td>4</td><td>31 min</td><td>$2,180</td><td><span class="badge badge-amber">Running Late</span></td></tr></tbody></table><div class="data-card"><div class="data-card-title">Today's Booked Revenue</div><div class="data-card-value">$24,180</div><div class="data-card-sub">8 techs on road · 21 jobs</div></div>`
      },
      {
        id: "quality-control",
        name: "Quality Control",
        shortDesc: "Documented QC standards verified on every job before the tech leaves the site",
        connections: ["onsite-prof","job-documentation","sops","training-dev"],
        consequence: "Quality problems found by the customer cost 10x more to fix than quality problems caught on-site. AI quality scoring needs inspection data, not complaints.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Quality control is "do good work." No checklist, no inspection, no photo requirement. Multiple callbacks last quarter — all caught by customers, none by the team. One callback cost over $1,000 to fix and generated a 2-star review.</p></div>`,
        structuredHTML: `<div class="data-label">QC Performance</div><div class="data-grid-3"><div class="data-card"><div class="data-card-title">Inspection Rate</div><div class="data-card-value">100%</div><div class="data-card-sub">Photo required to close</div></div><div class="data-card"><div class="data-card-title">Callbacks</div><div class="data-card-value">1</div><div class="data-card-sub">0.7% of jobs</div></div><div class="data-card"><div class="data-card-title">1st-Time Fix Rate</div><div class="data-card-value">97%</div><div class="data-card-sub">Target: 96%</div></div></div>`
      },
      {
        id: "sops",
        name: "Standard Operating Procedures",
        shortDesc: "Written SOPs for every repeatable task that let the business run without the owner",
        connections: ["quality-control","training-dev","onboarding","job-management"],
        consequence: "Without SOPs, the business is a hostage to memory. AI automation cannot trigger the right action without defined process steps to execute against.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Procedures exist in senior employees' heads. When someone is sick, tasks get done differently or not at all. Owner spends an hour a day answering questions that an SOP would answer in 30 seconds. Three procedures were done wrong last month because the new hire guessed.</p></div>`,
        structuredHTML: `<div class="data-label">SOP Library</div><ul class="checklist"><li><span class="check-icon check-green">✓</span><span>Customer intake &amp; booking (v2.1)</span></li><li><span class="check-icon check-green">✓</span><span>On-site arrival protocol (v1.3)</span></li><li><span class="check-icon check-green">✓</span><span>Job documentation standards (v2.0)</span></li><li><span class="check-icon check-green">✓</span><span>Complaint resolution protocol (v1.4)</span></li><li><span class="check-icon check-green">✓</span><span>After-hours emergency response (v1.2)</span></li><li><span class="check-icon check-red">✗</span><span>Fleet maintenance — due for update</span></li></ul><div class="data-card"><div class="data-card-title">SOPs Documented</div><div class="data-card-value">24 of 28</div><div class="data-card-sub">4 remaining · Priority: fleet, supply ordering</div></div>`
      }
    ]
  },

  /* ============================================================
     CLUSTER 7 — PEOPLE & WORKFORCE
  ============================================================ */
  {
    id: "people-workforce",
    name: "People & Workforce",
    color: "#6366F1",
    structuredPos: { x: 0.32, y: 0.76 },
    chaosTooltip: "Hiring is reactive, training is informal, turnover is a mystery",
    structuredTooltip: "Every team member tracked, developed, and retained with intention",
    clusterConnections: ["leadership","operations","compliance-legal","technology-systems"],
    components: [
      {
        id: "hiring",
        name: "Hiring & Recruitment",
        shortDesc: "A repeatable system for attracting, screening, and hiring top talent",
        connections: ["employee-onboarding","compensation","company-culture"],
        consequence: "Reactive hiring means hiring the wrong person under pressure. AI-assisted job matching and screening requires defined role profiles and skills matrices.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Hiring happens when someone quits or the owner gets desperate. Posts on job boards with a generic description. Interviews last 20 minutes over the phone. Reference checks skipped. Last bad hire cost tens of thousands in training, callbacks, and severance.</p></div>`,
        structuredHTML: `<div class="data-label">Hiring Pipeline — Open Role</div><table class="data-table"><thead><tr><th>Candidate</th><th>Stage</th><th>Skills Score</th><th>Next Step</th></tr></thead><tbody><tr><td class="val-white">Candidate A</td><td>Final interview</td><td class="val-green">87/100</td><td>Offer pending</td></tr><tr><td class="val-white">Candidate B</td><td>Skills test</td><td class="val-amber">72/100</td><td>Results review</td></tr></tbody></table><div class="data-card"><div class="data-card-title">Avg Time to Hire</div><div class="data-card-value">22 days</div><div class="data-card-sub">Down from 63 days (chaos state)</div></div>`
      },
      {
        id: "employee-onboarding",
        name: "Employee Onboarding",
        shortDesc: "Structured 90-day onboarding that gets new hires productive fast",
        connections: ["hiring","training-dev","sops","company-culture"],
        consequence: "Poor onboarding costs the first 60 days of productivity. AI learning path recommendations need a defined skills framework and role expectations to generate against.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Onboarding is: here's your desk, shadow someone for a week. No checklist. No 30/60/90 plan. Company values never discussed. Multiple new hires quit within 90 days citing "confusion about expectations."</p></div>`,
        structuredHTML: `<div class="data-label">90-Day Onboarding Plan</div><table class="data-table"><thead><tr><th>Milestone</th><th>Target</th><th>Status</th></tr></thead><tbody><tr><td class="val-white">Orientation + values</td><td>Day 1</td><td><span class="badge badge-green">Done</span></td></tr><tr><td class="val-white">System training</td><td>Day 3</td><td><span class="badge badge-green">Done</span></td></tr><tr><td class="val-white">Shadow 10 sessions (signed off)</td><td>Day 14</td><td><span class="badge badge-green">Done</span></td></tr><tr><td class="val-white">First performance review</td><td>Day 60</td><td><span class="badge badge-green">Done</span></td></tr><tr><td class="val-white">Full independence + bonus eligible</td><td>Day 90</td><td><span class="badge badge-blue">Upcoming</span></td></tr></tbody></table>`
      },
      {
        id: "performance-reviews",
        name: "Performance Reviews",
        shortDesc: "Structured reviews with clear metrics, development goals, and documented feedback",
        connections: ["employee-onboarding","compensation","training-dev"],
        consequence: "Without documented performance reviews, comp decisions are arbitrary and top performers leave. AI coaching tools need baseline performance scores to personalize development plans.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Performance reviews don't happen. "If you're not hearing anything, you're doing fine." Top performers have no formal review in years. Underperformers never get direct documented feedback. Raises given based on who asked.</p></div>`,
        structuredHTML: `<div class="data-label">Performance Scorecard</div><table class="data-table"><thead><tr><th>Team Member</th><th>Close Rate</th><th>QC Score</th><th>CSAT</th><th>Overall</th></tr></thead><tbody><tr><td class="val-white">Top Performer</td><td class="val-green">78%</td><td class="val-green">98%</td><td class="val-green">4.9</td><td class="val-green">A</td></tr><tr><td class="val-white">Mid Performer</td><td class="val-amber">70%</td><td class="val-green">98%</td><td class="val-green">4.7</td><td class="val-green">B+</td></tr><tr><td class="val-white">Needs Coaching</td><td class="val-red">53%</td><td class="val-amber">94%</td><td class="val-amber">4.6</td><td class="val-red">C+ (PIP)</td></tr></tbody></table>`
      }
    ]
  },

  /* ============================================================
     CLUSTER 8 — TECHNOLOGY & SYSTEMS
  ============================================================ */
  {
    id: "technology-systems",
    name: "Technology & Systems",
    color: "#3B82F6",
    structuredPos: { x: 0.18, y: 0.60 },
    chaosTooltip: "Multiple disconnected tools, data lives in silos",
    structuredTooltip: "Integrated tech stack with clean data flowing between every system",
    clusterConnections: ["operations","finance","people-workforce","compliance-legal"],
    components: [
      {
        id: "field-service-sw",
        name: "Field Service Software",
        shortDesc: "The central hub that connects scheduling, dispatch, invoicing, and customer records",
        connections: ["crm","scheduling-dispatch","job-management","financial-reporting"],
        consequence: "Disconnected software means double entry, lost data, and manual reconciliation. AI workflows cannot trigger across disconnected systems.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Jobs managed in a spreadsheet. Invoices in accounting software. Schedules on a whiteboard. Customer history in phone contacts. Four systems, zero integration. Office spends 2+ hours daily re-entering data across systems.</p></div>`,
        structuredHTML: `<div class="data-label">Tech Stack — Integrated Systems</div><ul class="checklist"><li><span class="check-icon check-green">✓</span><span>Field service platform (scheduling + dispatch + invoicing)</span></li><li><span class="check-icon check-green">✓</span><span>CRM synced to field service platform</span></li><li><span class="check-icon check-green">✓</span><span>Accounting integration (auto P&amp;L)</span></li><li><span class="check-icon check-green">✓</span><span>Customer communications automated</span></li><li><span class="check-icon check-green">✓</span><span>Mobile app for field techs</span></li></ul>`
      },
      {
        id: "data-reporting",
        name: "Data & Reporting",
        shortDesc: "Automated dashboards giving real-time visibility into every business metric",
        connections: ["kpi-dashboard","financial-reporting","field-service-sw"],
        consequence: "Business decisions made without data are guesses. AI analysis needs structured, consistent data pipelines — not manual spreadsheet exports.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Reporting means pulling a QuickBooks export and looking at it for 10 minutes. No real-time view. No trends. Cannot compare this week to last week without 2 hours of manual work. Dashboard doesn't exist.</p></div>`,
        structuredHTML: `<div class="data-label">Live Dashboard — Key Metrics</div><div class="data-grid-3"><div class="data-card"><div class="data-card-title">Revenue MTD</div><div class="data-card-value">$174,200</div><div class="data-card-sub">+3.7% vs budget</div></div><div class="data-card"><div class="data-card-title">Jobs Completed</div><div class="data-card-value">88</div><div class="data-card-sub">Of 119 scheduled</div></div><div class="data-card"><div class="data-card-title">Close Rate</div><div class="data-card-value">69%</div><div class="data-card-sub">Target: 72%</div></div></div>`
      },
      {
        id: "automation",
        name: "Process Automation",
        shortDesc: "AI and workflow tools that eliminate manual, repetitive tasks across every department",
        connections: ["field-service-sw","data-reporting","crm"],
        consequence: "Every manual step is a potential failure point. AI automation needs structured data inputs and defined triggers — chaos-state operations have neither.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Every process is manual. Reminders typed by hand. Review requests sent individually. Follow-up tracked in a personal to-do list. Office manager spends 3 hours per day on tasks that could be automated in 3 weeks.</p></div>`,
        structuredHTML: `<div class="data-label">Automation Inventory</div><ul class="checklist"><li><span class="check-icon check-green">✓</span><span>Booking confirmation (auto text + email)</span></li><li><span class="check-icon check-green">✓</span><span>Day-before reminder (auto)</span></li><li><span class="check-icon check-green">✓</span><span>Post-job follow-up sequence (auto)</span></li><li><span class="check-icon check-green">✓</span><span>Review request (triggered by CSAT ≥ 4)</span></li><li><span class="check-icon check-green">✓</span><span>Quote follow-up sequence (Days 2, 4, 7)</span></li><li><span class="check-icon check-green">✓</span><span>AR aging alerts (Days 7, 14, 30)</span></li></ul>`
      }
    ]
  },

  /* ============================================================
     CLUSTER 9 — PROCESSES & DOCUMENTATION
  ============================================================ */
  {
    id: "processes-docs",
    name: "Processes & Docs",
    color: "#84CC16",
    structuredPos: { x: 0.16, y: 0.40 },
    chaosTooltip: "Processes live in people's heads and die when they leave",
    structuredTooltip: "Every process documented, version-controlled, and accessible to all",
    clusterConnections: ["operations","people-workforce","technology-systems","compliance-legal"],
    components: [
      {
        id: "knowledge-base",
        name: "Knowledge Base",
        shortDesc: "A centralized, searchable library of everything the business knows",
        connections: ["sops","training-dev","field-service-sw"],
        consequence: "Knowledge that lives in people's heads walks out the door with them. AI knowledge retrieval requires a structured, queryable knowledge base.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Everything is in email threads, text messages, and individual heads. "Ask Jake — he knows how to do it." Jake is the knowledge base. Three people called in sick last month and tasks couldn't be covered correctly because the knowledge was unavailable.</p></div>`,
        structuredHTML: `<div class="data-label">Knowledge Base</div><ul class="checklist"><li><span class="check-icon check-green">✓</span><span>All SOPs linked and searchable</span></li><li><span class="check-icon check-green">✓</span><span>Equipment manuals and specs organized</span></li><li><span class="check-icon check-green">✓</span><span>Troubleshooting guides per equipment type</span></li><li><span class="check-icon check-green">✓</span><span>Training videos embedded and indexed</span></li><li><span class="check-icon check-green">✓</span><span>Customer FAQ and script library</span></li></ul><div class="data-card"><div class="data-card-title">Avg Search-to-Answer</div><div class="data-card-value">&lt; 90 sec</div><div class="data-card-sub">From any device</div></div>`
      },
      {
        id: "contracts",
        name: "Contracts & Agreements",
        shortDesc: "Standardized contracts that protect the business and set clear expectations",
        connections: ["compliance-legal","subcontractor-mgmt","customer-journey"],
        consequence: "Verbal agreements are unenforceable. AI contract review tools need existing contract templates as a baseline.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Proposals serve as informal contracts. No signed agreement on large jobs. Subcontractors used without written contracts. Had a scope dispute last year — customer claimed they weren't told about additional charges. Lost the argument with no documentation.</p></div>`,
        structuredHTML: `<div class="data-label">Contract Library</div><ul class="checklist"><li><span class="check-icon check-green">✓</span><span>Standard residential service agreement (signed digitally)</span></li><li><span class="check-icon check-green">✓</span><span>Commercial maintenance contract template</span></li><li><span class="check-icon check-green">✓</span><span>Subcontractor agreement + insurance requirement</span></li><li><span class="check-icon check-green">✓</span><span>Change order form (scope additions)</span></li><li><span class="check-icon check-green">✓</span><span>NDA for sensitive client data</span></li></ul>`
      }
    ]
  },

  /* ============================================================
     CLUSTER 10 — CUSTOMER RETENTION
  ============================================================ */
  {
    id: "customer-retention",
    name: "Customer Retention",
    color: "#F43F5E",
    structuredPos: { x: 0.62, y: 0.22 },
    chaosTooltip: "Past customers forgotten after the invoice is paid",
    structuredTooltip: "Systematic retention turning one-time buyers into lifelong clients",
    clusterConnections: ["marketing","customer-experience","finance","sales-cycle"],
    components: [
      {
        id: "maintenance-plans",
        name: "Maintenance Plans",
        shortDesc: "Recurring service agreements that create predictable revenue and lock in customer loyalty",
        connections: ["scheduling-dispatch","crm","customer-journey"],
        consequence: "One-time customers churn. Maintenance plan customers have 3x lifetime value. AI upsell timing needs service history data and contract status to recommend the right offer.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>No maintenance plan exists. Owner thought about it "a few years ago." Every customer is a one-time transaction. No recurring revenue. Cannot predict next month's jobs. Competitor down the street has 400 maintenance customers generating $80K/year in guaranteed revenue.</p></div>`,
        structuredHTML: `<div class="data-label">Maintenance Plan Program</div><div class="data-grid-2"><div class="data-card"><div class="data-card-title">Active Members</div><div class="data-card-value">287</div><div class="data-card-sub">+12 this month</div></div><div class="data-card"><div class="data-card-title">Annual Recurring Revenue</div><div class="data-card-value">$86,100</div><div class="data-card-sub">$299/yr avg plan</div></div></div><ul class="checklist"><li><span class="check-icon check-green">✓</span><span>Annual tune-up included (HVAC + plumbing tiers)</span></li><li><span class="check-icon check-green">✓</span><span>Priority scheduling (2hr window vs 4hr)</span></li><li><span class="check-icon check-green">✓</span><span>10% discount on all repair work</span></li><li><span class="check-icon check-green">✓</span><span>Auto-renewal with reminder sequence</span></li></ul>`
      },
      {
        id: "loyalty-prog",
        name: "Loyalty Program",
        shortDesc: "Points and rewards that increase repeat purchase frequency and referrals",
        connections: ["crm","referral-program","customer-retention"],
        consequence: "Customers with no reward for loyalty have no reason to stay. AI personalized offers need purchase history and engagement data to generate meaningful incentives.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>No loyalty program. Long-time customers pay the same rates as new customers. One customer who has used the company for 8 years and referred 6 neighbors has never received so much as a thank-you call. Competitor just launched a rewards app.</p></div>`,
        structuredHTML: `<div class="data-label">Loyalty Program — Performance</div><div class="data-grid-2"><div class="data-card"><div class="data-card-title">Enrolled Customers</div><div class="data-card-value">612</div><div class="data-card-sub">33% of customer base</div></div><div class="data-card"><div class="data-card-title">Repeat Rate (Members)</div><div class="data-card-value">81%</div><div class="data-card-sub">vs 49% non-members</div></div></div>`
      },
      {
        id: "re-engagement",
        name: "Re-Engagement Campaigns",
        shortDesc: "Automated campaigns that win back lapsed customers before they're gone for good",
        connections: ["crm","email-marketing","customer-retention"],
        consequence: "A customer who hasn't called in 18 months is 80% likely to use someone else next time. AI win-back campaigns need a lapsed customer segment to target.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Lapsed customers don't exist as a concept. "They'll call when they need us." 340 customers haven't been seen in over a year. No outreach ever sent. Most will call a competitor next time because recency and visibility drive choice.</p></div>`,
        structuredHTML: `<div class="data-label">Re-Engagement — Last Campaign</div><div class="data-grid-3"><div class="data-card"><div class="data-card-title">Contacts Targeted</div><div class="data-card-value">340</div><div class="data-card-sub">18+ months lapsed</div></div><div class="data-card"><div class="data-card-title">Responded</div><div class="data-card-value">67</div><div class="data-card-sub">19.7% response rate</div></div><div class="data-card"><div class="data-card-title">Revenue Recovered</div><div class="data-card-value">$28,400</div><div class="data-card-sub">38 jobs booked</div></div></div>`
      }
    ]
  },

  /* ============================================================
     CLUSTER 11 — COMPLIANCE & LEGAL
  ============================================================ */
  {
    id: "compliance-legal",
    name: "Compliance & Legal",
    color: "#EF4444",
    structuredPos: { x: 0.16, y: 0.22 },
    chaosTooltip: "Licenses assumed current, contracts verbal, insurance unchecked",
    structuredTooltip: "All licenses, insurance, and compliance tracked proactively",
    clusterConnections: ["people-workforce","operations","finance","technology-systems"],
    components: [
      {
        id: "licensing",
        name: "Licensing & Certifications",
        shortDesc: "All required trade and business licenses current, tracked, and renewed proactively",
        connections: ["compliance-legal","hr-compliance","training-dev"],
        consequence: "An expired license can shut down a job site and void insurance coverage. AI compliance tracking needs license expiration data to surface alerts before violations occur.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Owner "thinks" all licenses are current. Checked them last "a year or two ago." One tech's certification expired 4 months ago — discovered during a random audit. Contractor license renewal nearly missed. No calendar reminder system.</p></div>`,
        structuredHTML: `<div class="data-label">License &amp; Certification Tracker</div><table class="data-table"><thead><tr><th>License</th><th>Holder</th><th>Expiration</th><th>Status</th></tr></thead><tbody><tr><td class="val-white">Contractor license (state)</td><td>Owner</td><td>Dec 2026</td><td><span class="badge badge-green">Current</span></td></tr><tr><td class="val-white">Trade cert (primary trade)</td><td>All techs</td><td>Various</td><td><span class="badge badge-green">Current</span></td></tr><tr><td class="val-white">Business license (city)</td><td>Company</td><td>Jan 2026</td><td><span class="badge badge-green">Current</span></td></tr></tbody></table>`
      },
      {
        id: "insurance",
        name: "Insurance Coverage",
        shortDesc: "Comprehensive coverage reviewed annually with certificates on file for every job type",
        connections: ["licensing","subcontractor-mgmt","risk-management"],
        consequence: "Wrong or lapsed insurance on a single job can mean personal liability. AI risk assessment needs current coverage data to flag exposure gaps.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Insurance is whatever the agent sold last year. Owner doesn't know coverage limits without calling the agent. General liability certificate never requested from subs. One sub worked on a job for three months before anyone confirmed their insurance was valid.</p></div>`,
        structuredHTML: `<div class="data-label">Insurance Coverage Summary</div><table class="data-table"><thead><tr><th>Policy Type</th><th>Coverage</th><th>Renewal</th><th>Status</th></tr></thead><tbody><tr><td class="val-white">General Liability</td><td>$2M / $4M aggregate</td><td>Aug 2025</td><td><span class="badge badge-green">Current</span></td></tr><tr><td class="val-white">Workers Comp</td><td>Statutory limits</td><td>Aug 2025</td><td><span class="badge badge-green">Current</span></td></tr><tr><td class="val-white">Commercial Auto</td><td>$1M CSL / 8 vehicles</td><td>Aug 2025</td><td><span class="badge badge-green">Current</span></td></tr></tbody></table>`
      }
    ]
  },

  /* ============================================================
     CLUSTER 12 — FLEET & EQUIPMENT
  ============================================================ */
  {
    id: "fleet-equipment",
    name: "Fleet & Equipment",
    color: "#78716C",
    structuredPos: { x: 0.34, y: 0.22 },
    chaosTooltip: "Trucks break down without warning, equipment inventory unknown",
    structuredTooltip: "Every vehicle and tool tracked, maintained on schedule, and accounted for",
    clusterConnections: ["operations","finance","compliance-legal"],
    components: [
      {
        id: "fleet-maintenance",
        name: "Fleet Maintenance",
        shortDesc: "Preventive maintenance schedules for every vehicle that prevent costly breakdowns",
        connections: ["scheduling-dispatch","job-management","safety-protocols"],
        consequence: "A truck breakdown costs the day's revenue plus emergency repair. AI predictive maintenance needs mileage data and service history to flag vehicles before failure.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Maintenance happens when something breaks. Two trucks had unplanned breakdowns last year — total cost: $12,400 in repairs and lost revenue. No preventive schedule. Oil changes done "when someone notices." Mileage tracked nowhere.</p></div>`,
        structuredHTML: `<div class="data-label">Fleet Maintenance Schedule</div><table class="data-table"><thead><tr><th>Vehicle</th><th>Mileage</th><th>Last Service</th><th>Next Service</th><th>Status</th></tr></thead><tbody><tr><td class="val-white">Truck 1</td><td>84,200</td><td>Mar 1</td><td>Jun 1</td><td><span class="badge badge-green">Current</span></td></tr><tr><td class="val-white">Truck 2</td><td>71,400</td><td>Feb 14</td><td>May 14</td><td><span class="badge badge-green">Current</span></td></tr><tr><td class="val-white">Truck 3</td><td>102,800</td><td>Jan 22</td><td>Apr 22</td><td><span class="badge badge-amber">Due Soon</span></td></tr></tbody></table>`
      },
      {
        id: "parts-inventory",
        name: "Parts & Inventory",
        shortDesc: "Stocked and tracked inventory that eliminates same-day supply runs",
        connections: ["job-management","vendor-mgmt","job-costing"],
        consequence: "A tech driving to the supply house mid-job wastes 45+ minutes and delays the next job. AI inventory optimization needs consumption data and job forecasts to auto-reorder.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Inventory is whatever's in the truck. Techs make supply runs 3–4 times per week — sometimes mid-job. No reorder system. Parts ordered from memory. Last month: 11 supply runs logged — average 52 minutes each. That's 9+ hours of billable time lost to supply runs.</p></div>`,
        structuredHTML: `<div class="data-label">Inventory Management</div><div class="data-grid-3"><div class="data-card"><div class="data-card-title">SKUs Tracked</div><div class="data-card-value">284</div><div class="data-card-sub">In system</div></div><div class="data-card"><div class="data-card-title">Supply Runs / Month</div><div class="data-card-value">2</div><div class="data-card-sub">Down from 11</div></div><div class="data-card"><div class="data-card-title">Hours Saved</div><div class="data-card-value">7.5 hrs</div><div class="data-card-sub">Per month (billable)</div></div></div>`
      }
    ]
  },

  /* ============================================================
     CLUSTER 13 — VENDOR & SUPPLIER RELATIONS
  ============================================================ */
  {
    id: "vendor-mgmt",
    name: "Vendor Relations",
    color: "#D97706",
    structuredPos: { x: 0.16, y: 0.76 },
    chaosTooltip: "Vendors picked by habit, no negotiation, no performance tracking",
    structuredTooltip: "Vetted vendor network with negotiated terms and performance SLAs",
    clusterConnections: ["finance","operations","compliance-legal"],
    components: [
      {
        id: "supplier-relationships",
        name: "Supplier Relationships",
        shortDesc: "Vetted primary suppliers with negotiated pricing, credit terms, and performance standards",
        connections: ["parts-inventory","accounts-payable","purchasing"],
        consequence: "Unmanaged supplier relationships mean paying retail and getting low-priority service. AI procurement tools need vendor scorecards and pricing data to suggest consolidation.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Uses 6 suppliers — no preferred vendor program, no negotiated pricing. Pays counter price every time. One supplier has been on 30-day credit for 4 years — never asked for Net 45. Never reviewed supplier pricing against the market. Competitor is getting 12% better pricing on the same parts.</p></div>`,
        structuredHTML: `<div class="data-label">Preferred Vendor Program</div><table class="data-table"><thead><tr><th>Vendor</th><th>Category</th><th>Terms</th><th>YTD Spend</th><th>Discount</th></tr></thead><tbody><tr><td class="val-white">Primary Supply Co.</td><td>HVAC / Plumbing</td><td>Net 30 + 2/10</td><td>$84,200</td><td class="val-green">8%</td></tr><tr><td class="val-white">Parts Distributor</td><td>Equipment parts</td><td>Net 30</td><td>$42,100</td><td class="val-green">6%</td></tr><tr><td class="val-white">Tool &amp; Safety</td><td>PPE / Tools</td><td>Net 15</td><td>$12,400</td><td class="val-amber">3%</td></tr></tbody></table>`
      },
      {
        id: "subcontractor-network",
        name: "Subcontractor Network",
        shortDesc: "A vetted roster of specialty subcontractors available on demand",
        connections: ["subcontractor-mgmt","compliance-legal","job-management"],
        consequence: "Overflow work turned away is permanent revenue loss. AI capacity planning needs a subcontractor roster with availability and skills data to route overflow correctly.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>One sub used occasionally — "a guy someone knows." No contract. No insurance certificate on file. Three other potential subs never called back because no clear program exists. Turning away 15–20% of overflow requests.</p></div>`,
        structuredHTML: `<div class="data-label">Approved Subcontractor Roster</div><table class="data-table"><thead><tr><th>Sub</th><th>Trade</th><th>Insurance Exp.</th><th>Jobs (YTD)</th><th>Avg Rating</th></tr></thead><tbody><tr><td class="val-white">Electrical Sub</td><td>Electrical</td><td>Jun 2025</td><td>6</td><td class="val-green">4.9★</td></tr><tr><td class="val-white">Specialty Sub A</td><td>Ductwork</td><td>Sep 2025</td><td>3</td><td class="val-green">4.8★</td></tr><tr><td class="val-white">Specialty Sub B</td><td>Excavation</td><td>Dec 2025</td><td>2</td><td class="val-green">4.7★</td></tr></tbody></table>`
      }
    ]
  },

  /* ============================================================
     CLUSTER 14 — AI READINESS
  ============================================================ */
  {
    id: "ai-readiness",
    name: "AI Readiness",
    color: "#CC5500",
    structuredPos: { x: 0.50, y: 0.50 },
    chaosTooltip: "AI tools adopted randomly with no data infrastructure to support them",
    structuredTooltip: "Clean data, defined workflows, and trained team ready for AI deployment",
    clusterConnections: ["technology-systems","people-workforce","processes-docs","operations"],
    components: [
      {
        id: "data-infrastructure",
        name: "Data Infrastructure",
        shortDesc: "Clean, consistent data flowing through every system — the fuel AI needs to work",
        connections: ["field-service-sw","data-reporting","crm"],
        consequence: "AI is only as good as its data. Garbage in, garbage out — at machine speed. A structured data infrastructure is the prerequisite for every AI tool you want to deploy.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Data lives in 6 disconnected systems. Customer names spelled differently in each. Revenue numbers don't match between accounting and the field software. Job records incomplete. Any AI tool deployed against this data will produce wrong answers with high confidence.</p></div>`,
        structuredHTML: `<div class="data-label">Data Infrastructure Health</div><ul class="checklist"><li><span class="check-icon check-green">✓</span><span>Single customer ID across all systems</span></li><li><span class="check-icon check-green">✓</span><span>Job records complete (96% compliance)</span></li><li><span class="check-icon check-green">✓</span><span>Financial data reconciled monthly</span></li><li><span class="check-icon check-green">✓</span><span>API integrations eliminating manual data entry</span></li><li><span class="check-icon check-green">✓</span><span>Data retention policy documented and enforced</span></li></ul>`
      },
      {
        id: "ai-team-training",
        name: "AI Team Training",
        shortDesc: "Staff trained on AI tools relevant to their role — not just aware, but proficient",
        connections: ["training-dev","knowledge-base","automation"],
        consequence: "Tools your team won't use are wasted investment. AI adoption requires training, not just deployment. Proficiency requires practice, not just a demo.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Owner bought two AI tool subscriptions last year. Both went unused after week 2. No training. No defined use cases. Team used old processes because new tools "felt confusing." $3,600/year in unused subscriptions. AI is an expense, not an asset.</p></div>`,
        structuredHTML: `<div class="data-label">AI Training Program</div><table class="data-table"><thead><tr><th>Role</th><th>AI Tools</th><th>Proficiency</th><th>Certified</th></tr></thead><tbody><tr><td class="val-white">Office Admin</td><td>CRM AI, email automation</td><td class="val-green">Advanced</td><td class="val-green">✓</td></tr><tr><td class="val-white">Field Techs</td><td>Mobile dispatch, docs</td><td class="val-green">Proficient</td><td class="val-green">✓</td></tr><tr><td class="val-white">Owner</td><td>Dashboard AI, forecasting</td><td class="val-amber">Intermediate</td><td class="val-amber">In progress</td></tr></tbody></table>`
      },
      {
        id: "ai-use-cases",
        name: "AI Use Case Map",
        shortDesc: "Documented, prioritized AI applications specific to your business model",
        connections: ["automation","data-infrastructure","strategic-planning"],
        consequence: "AI without a use case map means random adoption. A prioritized map shows which applications deliver the highest ROI for your specific business — deployed in the right order.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Owner has seen AI demos and wants to "add AI" but has no idea where to start. Tried a chatbot last year — wrong use case for the business. No framework for evaluating which AI tools match which problems. Competitor is using AI for dispatch optimization — $180K in recovered capacity per year.</p></div>`,
        structuredHTML: `<div class="data-label">AI Use Case Roadmap</div><table class="data-table"><thead><tr><th>Use Case</th><th>ROI Est.</th><th>Complexity</th><th>Status</th></tr></thead><tbody><tr><td class="val-white">AI dispatch optimization</td><td class="val-green">$180K/yr</td><td>Medium</td><td><span class="badge badge-green">Live</span></td></tr><tr><td class="val-white">AI review response</td><td class="val-green">$24K/yr</td><td>Low</td><td><span class="badge badge-green">Live</span></td></tr><tr><td class="val-white">AI quote follow-up</td><td class="val-green">$64K/yr</td><td>Low</td><td><span class="badge badge-green">Live</span></td></tr><tr><td class="val-white">Predictive maintenance</td><td class="val-amber">$90K/yr</td><td>High</td><td><span class="badge badge-blue">Q3</span></td></tr></tbody></table>`
      }
    ]
  },

  /* ============================================================
     CLUSTER 15 — INDUSTRY & TRADE
  ============================================================ */
  {
    id: "industry-trade",
    name: "Industry & Trade",
    color: "#059669",
    structuredPos: { x: 0.84, y: 0.76 },
    chaosTooltip: "Industry knowledge informal, no trade associations leveraged",
    structuredTooltip: "Active in trade associations, current on codes, competitor-aware",
    clusterConnections: ["compliance-legal","people-workforce","operations"],
    components: [
      {
        id: "industry-assoc",
        name: "Industry Associations",
        shortDesc: "Active membership providing code updates, training, and networking",
        connections: ["continuing-ed","licensing","trade-compliance"],
        consequence: "Contractors not plugged into their trade association miss code changes, rebate programs, and legislative threats. AI regulatory monitoring needs association data feeds to surface relevant changes.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>Member of one association — "signed up, never went to a meeting." Doesn't use the training resources, the rebate program, or the legal hotline. Missed a code update notice sent to all members — failed an inspection as a result.</p></div>`,
        structuredHTML: `<div class="data-label">Association Memberships</div><table class="data-table"><thead><tr><th>Association</th><th>Annual Dues</th><th>Benefits Used</th><th>Value Captured</th></tr></thead><tbody><tr><td class="val-white">Primary Trade Assoc.</td><td>$840</td><td>Training, legal, advocacy</td><td class="val-green">$3,200 est.</td></tr><tr><td class="val-white">National Trade Org.</td><td>$680</td><td>Code updates, library</td><td class="val-green">$1,800 est.</td></tr><tr><td class="val-white">Local Chamber</td><td>$480</td><td>Networking, referrals</td><td class="val-green">$6,400 referral est.</td></tr></tbody></table>`
      },
      {
        id: "continuing-ed",
        name: "Continuing Education",
        shortDesc: "Structured program keeping all team members current on codes, technology, and techniques",
        connections: ["training-dev","licensing","industry-assoc"],
        consequence: "Trade technology changes faster than informal on-the-job learning can keep up with. AI skills gap analysis needs a training record database to identify which team members are behind.",
        chaosHTML: `<div class="chaos-state-text"><div class="chaos-label">⚠ Current Reality</div><p>CE is whatever is required for warranty authorization. No budget beyond that. Multiple team members haven't attended formal training in years. New product line introduced — only one person was trained. All others have to ask that person for every job involving the new product.</p></div>`,
        structuredHTML: `<div class="data-label">Continuing Education — Plan &amp; Status</div><table class="data-table"><thead><tr><th>Training</th><th>Required By</th><th>Staff Trained</th><th>Status</th></tr></thead><tbody><tr><td class="val-white">CE (license renewal)</td><td>Next renewal</td><td class="val-green">All current</td><td><span class="badge badge-green">Complete</span></td></tr><tr><td class="val-white">New product line (factory)</td><td>Warranty auth.</td><td class="val-amber">2 of 5 trained</td><td><span class="badge badge-blue">Expanding</span></td></tr><tr><td class="val-white">Industry certification</td><td>Company standard</td><td class="val-amber">4/8 certified</td><td><span class="badge badge-blue">2 in progress</span></td></tr></tbody></table>`
      }
    ]
  }
];
