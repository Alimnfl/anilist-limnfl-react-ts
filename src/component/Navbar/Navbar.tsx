import { AiFillHome, AiOutlineBars, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AddCollectionModal from '../Modal/AddCollectionModal';
import { useAnimecollections } from '../../context/animeCollections';
import { CollectionType } from '../../types/types';

function Sidebar() {
  const { addNewCollection, collections } = useAnimecollections();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-5 text-white p-7">
        <AiOutlineBars size={30} />
        <Link to={'/collection'}>
          <h1 className="text-xl font-bold cursor-pointer">Your Collection</h1>
        </Link>

        <AddCollectionModal collections={collections} onAddCollection={addNewCollection}>
          <AiOutlinePlus size={30} className="ml-[80px] cursor-pointer" />
        </AddCollectionModal>
      </div>

      <div className="mt-[30px] flex flex-col gap-6">
        {collections.map((collection: CollectionType) => (
          <Link to={`/collection/${collection.id}`}>
            <div className="flex items-center gap-4" key={collection.id}>
              <img className="w-12 h-48 rounded-md" src={collection.animes.length !== 0 ? collection.animes[collection.animes.length - 1].coverImage : '/default.png'} alt="Default" />
              <div>{collection.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="fixed flex flex-col gap-3 ">
      <div className="flex flex-col justify-between py-14 px-5 w-[400px] h-[300px]  rounded-r-lg  bg-zinc-950">
        <Link to="/">
          <div className="flex flex-row gap-8 ml-4">
            <img className="rounded-lg cursor-pointer w-7" src="/logo-lim.svg" />
            <p className="text-2xl font-bold text-white">LimNfl</p>
          </div>
        </Link>
        <Link to="/">
          <div className="flex flex-row items-center gap-8 ml-4">
            <AiFillHome size={28} className="text-white" />
            <p className="text-2xl font-bold text-white">Anime</p>
          </div>
        </Link>
      </div>
      <div className="w-[400px] h-[700px] rounded-tr-lg  bg-zinc-950">
        <Sidebar />
      </div>
    </div>
  );
}

export default Navbar;
