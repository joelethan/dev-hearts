import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy Accessible',
    description: 'Our mentorship program ensures convenient accessibility, allowing aspiring software developers to seamlessly connect with mentors and resources',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'More Affordable Cost',
    description: 'Experience top-tier mentorship at a fraction of the cost, making professional software development guidance accessible to a broader audience',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Flexible Study Time',
    description: 'A learning journey with the flexibility to choose study times that suit your schedule, enabling you to balance mentorship with other commitments',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Consultation With Mentor',
    description: 'Guidance through one-on-one consultations with experienced mentors, fostering a supportive environment for your software development growth',
    icon: <ContactSupportIcon />,
  },
]
