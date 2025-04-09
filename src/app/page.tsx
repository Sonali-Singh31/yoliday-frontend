// // import Image from "next/image";
// import Navbar from './components/Navbar'
// export default function Home() {
//   return (
//    <>
//     <div>
//       <a href="/dashboard">dashboard</a>
//       <Navbar/>
//     </div>
//    </>
//   );
// }

  // pages/index.tsx
  import Navbar from './components/Navbar';
  import Sidebar from './components/Sidebar';
  import Taskbar from './components/Taskbar';

  const Home = () => {
    return (
      <>
        <main>
        <Navbar />
        <Sidebar />
        <Taskbar />
        </main>
      </>
    );
  };

  export default Home;
