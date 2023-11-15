function Loader() {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-stone-100 flex items-center justify-center">
        <div>
          <svg className='animate-spin' height="100" viewBox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"/>
          </svg>
        </div>
      </div>
    );
  }
  
  export default Loader;
  