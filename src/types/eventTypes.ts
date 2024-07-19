// types.ts

export interface Event {
    id: string;
    name: string;
    type: string;
    startDate: string;
    endDate: string;
    description: string;
    handledBy: string;
    organisation: string;
    subEvents: number;
}
