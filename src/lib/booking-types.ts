export interface BookingSlot {
  start: string;
  end: string;
  display: string;
}

export interface BookingDate {
  date: string;
  dayOfWeek: string;
  slots: BookingSlot[];
}

export interface AvailabilityResponse {
  dates: BookingDate[];
}

export interface QuizData {
  name: string;
  businessName: string;
  email: string;
  helpText: string;
}

export interface ConfirmRequest {
  slot: BookingSlot;
  quiz: QuizData;
  insight: string;
}

export interface ConfirmResponse {
  success: boolean;
  eventId?: string;
  calendarLink?: string;
}

export type BookingState =
  | 'calendar'
  | 'quiz'
  | 'loading-insight'
  | 'insight'
  | 'confirming'
  | 'confirmed'
  | 'error';
