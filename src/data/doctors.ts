import doctor01 from '../assets/doctors/doctor-01.png';
import doctor02 from '../assets/doctors/doctor-02.png';
import doctor03 from '../assets/doctors/doctor-03.png';
import doctor04 from '../assets/doctors/doctor-04.png';
import doctor05 from '../assets/doctors/doctor-05.png';
import doctor06 from '../assets/doctors/doctor-06.png';
import doctor07 from '../assets/doctors/doctor-07.png';
import doctor08 from '../assets/doctors/doctor-08.png';
import doctor09 from '../assets/doctors/doctor-09.png';
import doctor10 from '../assets/doctors/doctor-10.png';
import doctor11 from '../assets/doctors/doctor-11.png';
import doctor12 from '../assets/doctors/doctor-12.png';
import doctor13 from '../assets/doctors/doctor-13.png';
import doctor14 from '../assets/doctors/doctor-14.png';
import doctor15 from '../assets/doctors/doctor-15.png';
import doctor16 from '../assets/doctors/doctor-16.png';
import doctor17 from '../assets/doctors/doctor-17.png';
import doctor18 from '../assets/doctors/doctor-18.png';
import doctor19 from '../assets/doctors/doctor-19.png';
import satyamSuman from '../assets/founder/satyam-suman.jpg';

export interface DoctorProfile {
    id: string;
    name: string;
    qualification: string;
    specialty: string;
    image?: string;
    hasRealPhoto?: boolean;
    linkTo?: string;
}

const doctors: DoctorProfile[] = [
    {
        id: 'satyam-suman',
        name: 'Satyam Suman',
        qualification: 'Founder & MD Medicoline Healthcare',
        specialty: '',
        image: satyamSuman,
        hasRealPhoto: true,
        linkTo: '/founders',
    },
    {
        id: 'dr-m-sudhakar',
        name: 'Dr. M. Sudhakar',
        qualification: 'MBBS, MD (General Medicine)',
        specialty: 'Senior Consultant General Physician and Diabetologist',
        image: doctor01,
        hasRealPhoto: false,
    },
    {
        id: 'dr-v-prasad-rao',
        name: 'Dr. V. Prasad Rao',
        qualification: 'MBBS, DNB (General Medicine)',
        specialty: 'Senior Consultant Physician and Diabetologist',
        image: doctor02,
        hasRealPhoto: false,
    },
    {
        id: 'dr-d-shravan-kumar',
        name: 'Dr. D. Shravan Kumar',
        qualification: 'MBBS, MD (General Medicine)',
        specialty: 'Consultant and Diabetologist',
        image: doctor03,
        hasRealPhoto: false,
    },
    {
        id: 'dr-a-n-divya-dhathri',
        name: 'Dr. A N Divya Dhathri',
        qualification: 'MBBS, MD (General Medicine)',
        specialty: 'Consultant Physician & Visiting Doctor',
        image: doctor04,
        hasRealPhoto: false,
    },
    {
        id: 'dr-ch-gopinadh',
        name: 'Dr. CH. Gopinadh',
        qualification: 'MBBS, DNB, IDCCM, FIPM',
        specialty: 'Consultant Critical Care & Pain Specialist',
        image: doctor05,
        hasRealPhoto: false,
    },
    {
        id: 'dr-om-prakash-prasad',
        name: 'Dr. Om Prakash Prasad',
        qualification: 'MBBS, MD (Medicine), DM (Neurology)',
        specialty: 'Senior Neurophysician',
        image: doctor06,
        hasRealPhoto: false,
    },
    {
        id: 'dr-d-deepika',
        name: 'Dr. D. Deepika',
        qualification: 'MBBS, DNB (Medicine), DrNB (Neurology)',
        specialty: 'Consultant Neurophysician & Visiting Doctor',
        image: doctor07,
        hasRealPhoto: false,
    },
    {
        id: 'dr-raja-chaitanya-reddy',
        name: 'Dr. Raja Chaitanya Reddy',
        qualification: 'MBBS, MS (General Surgery), MCh (Neurosurgery)',
        specialty: 'Consultant Neurosurgery',
        image: doctor08,
        hasRealPhoto: false,
    },
    {
        id: 'dr-n-prashanth-reddy',
        name: 'Dr. N. Prashanth Reddy',
        qualification: 'MBBS, MS (General Surgery)',
        specialty: 'Consultant General Surgeon',
        image: doctor09,
        hasRealPhoto: false,
    },
    {
        id: 'dr-g-nikhil',
        name: 'Dr. G. Nikhil',
        qualification: 'MBBS, MS (General Surgery)',
        specialty: 'Consultant General Surgeon',
        image: doctor10,
        hasRealPhoto: false,
    },
    {
        id: 'dr-s-ganesh',
        name: 'Dr. S. Ganesh',
        qualification: 'MBBS, MDRD',
        specialty: 'Consultant Radiologist',
        image: doctor11,
        hasRealPhoto: false,
    },
    {
        id: 'dr-s-divya-sree',
        name: 'Dr. S. Divya Sree',
        qualification: 'BPT, MPT (Neuro-physiotherapist)',
        specialty: 'Neuro-physiotherapist',
        image: doctor12,
        hasRealPhoto: false,
    },
    {
        id: 'dr-y-manohar',
        name: 'Dr. Y. Manohar',
        qualification: 'BPT (Physiotherapist)',
        specialty: 'Physiotherapist',
        image: doctor13,
        hasRealPhoto: false,
    },
    {
        id: 'dr-a-harichandana',
        name: 'Dr. A. Harichandana',
        qualification: 'MBBS',
        specialty: '',
        image: doctor14,
        hasRealPhoto: false,
    },
    {
        id: 'dr-k-bhaskar',
        name: 'Dr. K. Bhaskar',
        qualification: 'MBBS',
        specialty: '',
        image: doctor15,
        hasRealPhoto: false,
    },
    {
        id: 'dr-krishna-chaithanya',
        name: 'Dr. Krishna Chaithanya',
        qualification: 'BAMS',
        specialty: '',
        image: doctor16,
        hasRealPhoto: false,
    },
    {
        id: 'dr-s-nikhil',
        name: 'Dr. S. Nikhil',
        qualification: 'BAMS',
        specialty: '',
        image: doctor17,
        hasRealPhoto: false,
    },
    {
        id: 'dr-a-prashanth',
        name: 'Dr. A. Prashanth',
        qualification: 'Pharm D',
        specialty: '',
        image: doctor18,
        hasRealPhoto: false,
    },
    {
        id: 'dr-k-praveen-kumar',
        name: 'Dr. K. Praveen Kumar',
        qualification: 'Pharm D',
        specialty: '',
        image: doctor19,
        hasRealPhoto: false,
    },
];

export default doctors;
