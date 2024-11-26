interface Filter {
    field: string;
    operation: string;
    value: string;
  }
  
  const createFilter = (field: string, operation: string, value: string): Filter => ({
    field,
    operation,
    value,
  });
  
  const createTickerFilter = (filter?: string): Filter[] => {
    if (!filter) return [];
    
    if (filter === '0-9') {
      return [
        createFilter('company', 'REGEXP', '^[0-9]'),
        createFilter('is_etf', '=', '0'),
      ];
    } else {
      return [
        createFilter('company', 'LIKE', `${filter}%`),
        createFilter('is_etf', '=', '0'),
      ];
    }
  };
  
  const createEtfFilter = (filter?: string): Filter[] => {
    const filters: Filter[] = [
      createFilter('is_etf', '=', '1')
    ];
  
    if (filter) {
      if (filter === '0-9') {
        filters.push(createFilter('company', 'REGEXP', '^[0-9]'));
      } else {
        filters.push(createFilter('company', 'LIKE', `${filter}%`));
      }
    }
  
    return filters;
  };
  
  export { createTickerFilter, createEtfFilter };