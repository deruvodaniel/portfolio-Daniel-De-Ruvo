# Components Architecture

This project follows a modular component organization based on **functionality and reusability**.

## Structure

```
src/components/
├── ui/           # Reusable UI components
├── sections/     # Page sections (main content modules)
└── layout/       # Layout components (structure)
```

## 📦 UI Components (`/ui`)

**Shared, reusable components** used across multiple sections. These components are:
- **Stateless** or have minimal internal state
- **Generic** and configurable via props
- **Highly reusable** across different contexts

Examples:
- `SkillCard` - Card component for displaying skills
- `TechCarousel` - Technology stack carousel
- `ModalLoading` - Loading modal
- `AnimatedSection` - Wrapper for animated sections
- `Accordion` - Collapsible content component

### Usage
```javascript
import { SkillCard, TechCarousel, ModalLoading } from 'components/ui';
```

## 🎯 Section Components (`/sections`)

**Main page modules** that represent distinct sections of the application:
- `Home` - Hero section
- `AboutMe` - About section with skills
- `Experience` - Work experience timeline
- `Projects` - Projects showcase
- `Contact` - Contact form
- `Technologies` - Tech stack section
- `Courses` - Certifications

These components:
- **Orchestrate** multiple UI components
- Contain **business logic** specific to their section
- May have **complex state** or data fetching

### Usage
```javascript
import { Home, AboutMe, Experience } from 'components/sections';
```

## 🏗️ Layout Components (`/layout`)

**Structural components** that define the app's layout:
- `Header` - Navigation bar
- `Footer` - Footer with links

These components:
- Define the **overall structure**
- Are used **once per page**
- Provide **navigation** and branding

### Usage
```javascript
import { Header, Footer } from 'components/layout';
```

---

## Benefits of This Architecture

✅ **Clear Separation of Concerns**: Each folder has a well-defined purpose  
✅ **Scalability**: Easy to add new components in the right category  
✅ **Reusability**: UI components can be shared across sections  
✅ **Maintainability**: Logical grouping makes finding components intuitive  
✅ **Centralized Exports**: Import multiple components from single entry points
