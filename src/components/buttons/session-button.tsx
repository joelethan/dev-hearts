import React, { FC } from 'react'
import { StyledButton } from '@/components/buttons'

interface SButtonProps {
  id?: string;
}

const SessionButton: FC<SButtonProps> = ({ id }) => {
  console.log(id);
  return (
    <StyledButton onClick={() => console.log("....")} color="primary" size="large" variant="contained">
      Book a Session
    </StyledButton>
  )
}

export default SessionButton
