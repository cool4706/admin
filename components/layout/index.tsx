/*
  desc : 레이아웃 index 페이지
  date : 2021-03-18
*/
import Header from '@/components/layout/components/header'
function Layout ({children, ...props}) {
/* INPUT YOUR CODE */
  return (
    <>
      <Header>
      </Header>
      {children}
    </>
  )
}
export default Layout