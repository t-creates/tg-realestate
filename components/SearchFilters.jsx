import { useEffect, useState } from 'react';
import { Flex, Select, Box, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/filterData';

  const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);
    const router = useRouter();
    
    // Updates the url to request properties with the selcted filter options
    const searchProperties = (filterValues) => {
      const path = router.pathname;
      const { query } = router;

      const values = getFilterValues(filterValues);

      // Updating query
      values.forEach((item) => {
        query[item.name] = item.value
      })

      router.push({ pathname: path, query })
    }

    return (
      <Flex flexWrap='wrap' justifyContent='center' bg='gray.100' p='4' >
        {filters.map((filter) => (
          <Box key={filter.queryName}>
            {/* Select options */}
            <Select
              placeholder={filter.placeholder}
              w='fit-content'
              p='2'
              onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
            >
              {/* Rendering out the filtered items for the Select options  */}
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>{item.name}</option>
              ))}

            </Select>
          </Box>
        ))}
      </Flex>
    )

  }

export default SearchFilters;