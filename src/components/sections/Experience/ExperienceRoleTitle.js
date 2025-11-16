export const ExperienceRoleTitle = ({ role, company }) => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '4px', 
    alignItems: 'flex-start' 
  }}>
    <span style={{ 
      fontSize: '1.4rem', 
      fontWeight: '600', 
      color: 'var(--textPrimary)', 
      lineHeight: '1.2'
    }}>
      {role}
    </span>
    <span style={{ 
      fontSize: '1.1rem', 
      fontWeight: '400', 
      color: 'var(--textMuted)', 
      lineHeight: '1.3'
    }}>
      {company}
    </span>
  </div>
);
