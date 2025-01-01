const Link = ({ route }) => {
    return (
      <li className="mr-10">
        <a
          href={route.path}
          className="block px-4 py-2 text-blue-500 hover:text-blue-700 hover:bg-gray-200 rounded transition-all duration-300"
        >
          {route.name}
        </a>
      </li>
    );
  };
  
  export default Link;
  