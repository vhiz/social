import AddPost from '../components/AddPost'
import Feed from '../components/Feed'
import Stories from '../components/Stories'
import RootLayout from '../layout/RootLayout'

export default function Home() {
  return (
    <RootLayout header={'Home'}>
      <Stories />
      <AddPost />
      <Feed />
    </RootLayout>
  )
}
