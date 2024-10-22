// Personal Information Interface
interface PersonalInfo {
    firstName: string;
    lastName: string;
    fullName: string;
    userName: string;
    phoneNumber: string;
    emailAddress: string;
    bvn: string;
    gender: "Male" | "Female";
    maritalStatus: "Single" | "Married" | "Divorced";
    children: number;
    typeOfResidence: "Owned" | "Rented" | "Family Apartment";
  }
  
  // Education and Employment Information Interface
  interface EducationEmploymentInfo {
    levelOfEducation: "HS" | "BD" | "MD" | "PhD";
    employmentStatus: "Employed" | "Unemployed" | "Self-Employed";
    sectorOfEmployment: "Finance" | "Tech" | "Education" | "Healthcare" | "Other";
    durationOfEmployment: number; // in years
    organisation: "Lendsqr" | "Irorun";
    officeEmail: string;
    monthlyIncome: number;
    loanRepayment: number;
    dateJoined: string; // ISO Date format
  }
  
  // Social Media Information Interface
  interface SocialMedia {
    twitter: string;
    facebook: string;
    instagram: string;
  }
  
  // Guarantor Information Interface
  interface GuarantorInfo {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    relationship: "Mother" | "Father" | "Sister" | "Brother" | "Cousin" | "Uncle" | "Aunty";
  }
  
  // Main User Interface
  export interface IUser  {
    id: string;
    personalInfo: PersonalInfo;
    educationEmploymentInfo: EducationEmploymentInfo;
    socialMedia: SocialMedia;
    guarantorInfo: GuarantorInfo;
    status: "Inactive" | "Pending" | "Blacklisted" | "Active";
  }
  