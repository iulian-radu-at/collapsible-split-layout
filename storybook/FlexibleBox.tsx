import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';

type Props = {
  isVertical?: boolean;
  maxSize?: number;
  minSize?: number;
};

export function FlexibleBox(props: Props) {
  const { isVertical = false, maxSize = 100, minSize = 50 } = props;

  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: 'aqua',
        height: isVertical ? (isCollapsed ? minSize / 2 : maxSize * 2) : '100%',
        overflow: 'hidden',
        width: isVertical ? '100%' : isCollapsed ? minSize / 2 : maxSize * 2,
      }}
    >
      <Button variant="contained" onClick={handleClick}>
        {isCollapsed ? 'Expand' : 'Collapse'}
      </Button>
    </Box>
  );
}
