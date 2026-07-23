import { CreditCard } from 'lucide-react';
import { PAYMENT_METHODS } from '../../../constants';

export function PaymentMethods() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5">
      {PAYMENT_METHODS.map((method) => (
        <span key={method} className="badge-pill inline-flex items-center gap-1.5">
          <CreditCard size={12} />
          {method}
        </span>
      ))}
    </div>
  );
}
