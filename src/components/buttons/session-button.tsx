import React, { FC } from 'react'
import { StyledButton } from '@/components/buttons'

interface SButtonProps {
  id?: string;
}

const SessionButton: FC<SButtonProps> = ({ id }) => {
  console.log(id);
  return (
    <StyledButton onClick={() => console.log("....")} color="primary" size="large" variant="contained">
      Apply to Volunteer
    </StyledButton>
  )
}

export default SessionButton
