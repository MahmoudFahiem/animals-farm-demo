import Pagination, {
  PaginationRenderItemParams,
} from "@mui/material/Pagination";
import React, { ChangeEvent, ReactNode } from "react";
import { PaginationItem, PaginationItemProps } from "@mui/material";

export interface PaginatorProps {
  lastPage: number;
  page?: number;
  onChange: (newPage: number) => void;
}

const Paginator = ({ page = 1, lastPage, onChange }: PaginatorProps) => {
  const handleChange = (event: ChangeEvent<unknown>, newPage: number) => {
    onChange(newPage);
  };

  const renderItem = (params: PaginationRenderItemParams): ReactNode => {
    const newParams: PaginationItemProps = { ...params };

    if (params.type === "page") newParams.disabled = params.selected;
    return <PaginationItem {...newParams} />;
  };

  return (
    <div className="mt-12 flex justify-center space-x-3">
      <Pagination
        size="large"
        siblingCount={0}
        count={lastPage}
        page={page}
        onChange={handleChange}
        renderItem={renderItem}
      />
    </div>
  );
};

export default Paginator;
