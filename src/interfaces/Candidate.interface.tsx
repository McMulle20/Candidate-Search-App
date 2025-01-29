// TODO: Create an interface for the Candidate objects returned by the API
// src/interfaces/Candidate.interface.tsx

export default interface Candidate {
    readonly login: string;
    readonly id: number;
    readonly avatar_url: string;
    readonly name: string;
    readonly location: string;
    readonly email: string;  
    readonly company: string;  
    readonly html_url: string;
    readonly bio: string;  
  }
  