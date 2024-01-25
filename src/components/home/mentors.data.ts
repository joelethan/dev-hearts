import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    // photo: '/images/mentors/christian-buehner-DItYlc26zVI-unsplash.jpg',
    photo: '/images/mentors/mentor-joel-katusiime.jpg',
    name: 'Joel Katusiime',
    linkedin: "https://www.linkedin.com/in/joelkatsme/",
    category: 'Senior Software Engineer & Developer',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    company: {
      name: 'ACMIS / Crystal Solutions / DevHearts',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    // photo: '/images/mentors/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg',
    photo: '/images/mentors/mentor-akram-mukasa.jpeg',
    name: 'Akram Mukasa',
    linkedin: "https://www.linkedin.com/in/akram-mukasa-14b4a516a/",
    category: 'Senior Software QA Engineer & Developer',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    company: {
      name: 'SafeBoda / DevHearts',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/mentor-sam-rubarema.jpeg',
    name: 'Sam Rubarema',
    linkedin: "https://www.linkedin.com/in/rubarema-sam/",
    category: 'Senior Software Engineer',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    company: {
      name: 'Kanzu Code / DevHearts',
      logo: '/images/companies/airbnb.png',
    },
  },
  // {
  //   id: 4,
  //   photo: '/images/mentors/philip-martin-5aGUyCW_PJw-unsplash.jpg',
  //   name: 'Ethan Arinaitwe',
  //   linkedin: "https://www.linkedin.com/in/joelkatsme/",
  //   category: 'Fullstack Development',
  //   description:
  //     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   company: {
  //     name: 'Microsoft',
  //     logo: '/images/companies/microsoft.png',
  //   },
  // },
]
