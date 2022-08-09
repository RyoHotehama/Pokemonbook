import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';

const Page = ({data}: any) => {
  const PER_PAGE = 50;
  const router = useRouter();
  const [page, setPage] = useState(1);
  const isFirstRender = useRef(false);
  const totalPage = Math.ceil(data.count / PER_PAGE);

  useEffect(() => {
    // 初回のみ呼ばれる
    isFirstRender.current = true
  }, [])

  useEffect(() => {
    if (data.page == null) {
      setPage(1);
    }
  }, [data.page])

  useEffect(() => {
    // 初回レンダリング判定
    if(isFirstRender.current) {
      isFirstRender.current = false
    } else {
      pageTransition();
    }
  }, [page]);

  const pageTransition = () => {
    if(page != 1) {
      router.push({
        pathname: '/',
        query: {page: page, limit: data.limit, offset: data.offset}
      });
    } else if (page == 1) {
      router.push({
        pathname: '/',
        query: {limit: data.limit, offset: data.offset}
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }
console.log(page);
  return (
    <Stack spacing={2} sx={{margin: '4rem auto'}}>
      <Pagination count={totalPage} page={page} onChange={handleChange} sx={{margin: '0 auto'}} size='large'/>
    </Stack>
  )
}

export default Page