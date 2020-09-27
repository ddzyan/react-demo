import { useEffect } from 'react';
import useBus from './useBus';

export default function useBreadcrumb(list = []) {
  const bus = useBus();
  useEffect(() => {
    bus.emit('breadcrumbList', list);
    return () => {
      bus.emit('breadcrumbList', []);
    };
  });
}
