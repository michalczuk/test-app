import React, { FC, Suspense } from "react";
import { Container } from "@mui/system";
import { Skeleton } from "@mui/material";

interface AppSuspenseProps {}

export const AppSuspense: FC<AppSuspenseProps> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Container sx={{ p: 5 }}>
          <Skeleton variant="rounded" width="100%" height="65vh" />
        </Container>
      }
    >
      {children}
    </Suspense>
  );
};
