export type ReportReason =
  'spam' | 'fraud' | 'inaccurate' | 'offensive' | 'other';

export interface JobReport {
  jobId: string;
  reason: ReportReason;
  details: string;
}
