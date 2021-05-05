import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";

// Dashboard
import Dashboard from "../pages/Dashboard/index";

//University page
import UniversityXYZ from "../pages/_Collaborators/Universities/UniversityXYZ";

//forms
import CollaborativeConferencesForm from "../pages/_Forms/CollaborativeConferencesForm";
import CollaborativePublicationsForm from "../pages/_Forms/CollaborativePublicationsForm";
import IncomingStudentsForm from "../pages/_Forms/IncomingStudentsForm"
import OutgoingStudentsForm from "../pages/_Forms/OutgoingStudentsForm";
import ResearchFundedForm from "../pages/_Forms/ResearchFundedForm";
import ResearchNonFundedForm from "../pages/_Forms/ResearchNonFundedForm";
import IncomingFacultyForm from "../pages/_Forms/IncomingFacultyForm";
import OutgoingFacultyForm from "../pages/_Forms/OutgoingFacultyForm";
import WebinarsForm from "../pages/_Forms/WebinarsForm";
import CSAIncomingStudentsForm from "../pages/_Forms/CSAIncomingStudentsForm";
import CSAIncomingFacultyForm from "../pages/_Forms/CSAIncomingFacultyForm";
import FacultyTaughtForm from "../pages/_Forms/FacultyTaughtForm";
import CurriculumInternationalizationForm from "../pages/_Forms/CurriculumInternationalizationForm";
import ProfessionalInternationalOrganizationsForm from "../pages/_Forms/ProfessionalInternationalOrganiztionsForm";
import CompanyPartnersForm from "../pages/_Forms/CompanyPartnersForm";
import USACForm from "../pages/_Forms/USACForm";
import IndiaGatewayTrainingForm from "../pages/_Forms/IndiaGatewayTrainingForm";
import DegreeInternationalStudentsForm from "../pages/_Forms/DegreeInternationalStudentsForm";



// Collaborator Pages
import CollaborativeVisits from "../pages/_Collaborators/CollaborativeVisits";
import NewTemplate from "../pages/_Collaborators/NewTemplate";
import CollaborativeConferences from "../pages/_Collaborators/CollaborativeConferences";
import CollaborativePublications from "../pages/_Collaborators/CollaborativePublications";

//Students Pages
import IncomingStudents from "../pages/_Students/IncomingStudents";
import OutgoingStudents from "../pages/_Students/OutgoingStudents";

//Faculty Pages
import IncomingFaculty from "../pages/_Faculty/IncomingFaculty";
import OutgoingFaculty from "../pages/_Faculty/OutgoingFaculty";

// International Webinars page
import InternationalWebinars from "../pages/_InternationalWebinars/InternationalWebinars";

//CSA
import CSAIncomingStudents from "../pages/_CSA/CSAIncomingStudents";
import CSAIncomingFaculty from "../pages/_CSA/CSAIncomingFaculty";

//Curriculum Internationalization page
import CurriculumInternationalization from "../pages/_CurriculumInternationalization/CurriculumInternationalization";

//Research pages
import FundedResearch from "../pages/_ResearchProjects/FundedResearch";
import NonFundedResearch from "../pages/_ResearchProjects/NonFundedResearch";

//Contact Details page
import ContactDetails from "../pages/_ContactDetails/ContactDetails";
import ContactDetailsForm from "../pages/_ContactDetails/ContactDetailsForm";

//Reports
import Reports from "../pages/_Reports/Reports";

// Credits page
import Credits from "../pages/_Credits/Credits";



//Utility
import Maintenance from "../pages/Utility/Maintenance";
import CommingSoon from "../pages/Utility/CommingSoon";
import Error404 from "../pages/Utility/Error404";
import Error500 from "../pages/Utility/Error500";


// Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login";
import Register1 from "../pages/AuthenticationInner/Register";
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";


const authProtectedRoutes = [

	//Colaborators
	{ path: "/Collaborators-new-template", component: NewTemplate },
	{ path: "/Collaborators-collaborative-visits", component: CollaborativeVisits },
	{ path: "/Collaborators-collaborative-conferences", component: CollaborativeConferences },
	{ path: "/Collaborators-collaborative-publications", component: CollaborativePublications },

	//University page
	{ path: "/University-XYZ", component: UniversityXYZ },

	//Faculty
	{ path: "/Faculty-Incoming-faculty", component: IncomingFaculty },
	{ path: "/Faculty-Outgoing-faculty", component: OutgoingFaculty },

	//Students
	{ path: "/Students-Incoming-students", component: IncomingStudents },
	{ path: "/Students-Outgoing-students", component: OutgoingStudents },

	//International Webinars
	{ path: "/International-webinars", component: InternationalWebinars },

	//CSA
	{ path: "/CSA-Incoming-students", component: CSAIncomingStudents},
	{ path: "/CSA-Incoming-faculty", component: CSAIncomingFaculty },

	//Curriculum Internationalization
	{ path: "/Curriculum-Internationalization", component: CurriculumInternationalization},

	//Research
	{ path: "/Research-Funded-Research", component: FundedResearch},
	{ path: "/Research-Non-Funded-Research", component: NonFundedResearch },

	//Contact Details
	{ path: "/Contact-Details", component: ContactDetails },
	{ path: "/Contact-Details-Form", component: ContactDetailsForm },
	
	// Reports
	{ path: "/Reports", component: Reports },

	// Credits page
	{ path: "/Credits", component: Credits },

	// Forms for the tables
	{ path: "/Collaborative-Conferences-Form", component: CollaborativeConferencesForm  },
	{ path: "/Collaborative-Publications-Form", component: CollaborativePublicationsForm  },
	{ path: "/Incoming-students-form", component: IncomingStudentsForm },
	{ path: "/Outgoing-Students-form", component: OutgoingStudentsForm },
	{ path: "/Research-funded-form", component: ResearchFundedForm },
	{ path: "/Research-Nonfunded-form", component: ResearchNonFundedForm },
	{ path: "/Incoming-Faculty-Form", component: IncomingFacultyForm   },
	{ path: "/Outgoing-Faculty-Form", component: OutgoingFacultyForm   },
	{ path: "/Webinars-Form", component: WebinarsForm  },
	{ path: "/CSA-Incoming-Students-Form", component: CSAIncomingStudentsForm  },
	{ path: "/CSA-Incoming-Faculty-Form", component: CSAIncomingFacultyForm  },
	{ path: "/Faculty-Taught-Form", component: FacultyTaughtForm  },
	{ path: "/Curriculum-Internationalization-Form", component: CurriculumInternationalizationForm  },
	{ path: "/Professional-International-Organizations-Form", component: ProfessionalInternationalOrganizationsForm    },
	{ path: "/Company-Partners-Form", component: CompanyPartnersForm    },
	{ path: "/USAC-Form", component: USACForm   },
	{ path: "/India-Gateway-Training-Form", component: IndiaGatewayTrainingForm   },
	{ path: "/Degree-International-Students-Form", component: DegreeInternationalStudentsForm   },
	

	{ path: "/dashboard", component: Dashboard },
	
	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },
	{ path: "/auth-lock-screen", component: AuthLockScreen },

	// Authentication Inner
	{ path: "/auth-login", component: Login1 },
	{ path: "/auth-register", component: Register1 },
	{ path: "/auth-recoverpw", component: ForgetPwd1 },

	{ path: "/pages-maintenance", component: Maintenance },
	{ path: "/pages-comingsoon", component: CommingSoon },
	{ path: "/pages-404", component: Error404 },
	{ path: "/pages-500", component: Error500 },
];

export { authProtectedRoutes, publicRoutes };
