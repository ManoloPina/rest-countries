import { useState, useMemo, useCallback } from "react";

interface IPagination {
  pageSize: number;
  totalItens: number;
}

export const usePagination = ({ totalItens, pageSize }: IPagination) => {
  const [currPage, setCurrPage] = useState(1);
  const startIndex = useMemo(
    () => (currPage - 1) * pageSize,
    [currPage, pageSize]
  );
  const endIndex = useMemo(() => currPage * pageSize, [currPage, pageSize]);
  const totalPages = useMemo(
    () => Math.ceil(totalItens / pageSize),
    [totalItens, pageSize]
  );

  //handlers
  const handlePageChange = useCallback(
    (_event: any, page: number) => setCurrPage(page),
    [currPage]
  );
  return { currPage, startIndex, endIndex, totalPages, handlePageChange };
};
