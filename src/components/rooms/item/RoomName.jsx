import search from '../../../assets/img/icons/loupe.png';

export default function RoomName({ name, handlerSearch }) {
  return (
    <div className={'room-name'}>
      <div>{name}</div>
      <button
        className={'room-search-btn'}
        onClick={() => handlerSearch()}
      >
        <img
          width={25}
          height={25}
          src={search}
          alt={'search'} 
        />
      </button>
    </div>
  );
}
