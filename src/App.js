import HeadNavbar from './views/navbar';
import Fbposts from './views/posts';

function App() {
  return (
    <>
      <HeadNavbar />
      <div className='mt-20'>
        <Fbposts />
      </div>
    </>
  );
}

export default App;
