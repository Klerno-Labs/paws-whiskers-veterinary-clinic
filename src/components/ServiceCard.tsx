```typescript
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode; // Lucide React icon
  category: string;
  size: 'small' | 'large' | 'wide';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, category, size }) => {
  return (
    <div className={`group bg-white p-8 rounded-[24px] shadow-card hover:shadow-hover transition-all duration-300 border border-slate-100 flex flex-col justify-between relative overflow-hidden ${size === 'large' ? 'col-span-2 row-span-2 min-h-[400px]' : 'min-h-[200px]'}`}>
      <div className="flex items-center mb-6">
        {icon}
        <h3 className="text-lg font-semibold text-slate-900 ml-4">{title}</h3>
      </div>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
```