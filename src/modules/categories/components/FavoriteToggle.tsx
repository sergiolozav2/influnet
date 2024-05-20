import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useToggleFavorite } from "../hooks/useToggleFavorite";
import { useState } from "react";

type FavoriteToggleProps = {
  ofertaID: number;
  defaultSelected: boolean;
};
export function FavoriteToggle(props: FavoriteToggleProps) {
  const [selected, setSelected] = useState(props.defaultSelected);

  const favorito = useToggleFavorite({
    ofertaID: props.ofertaID,
    onError: handleError,
    onSuccess: handleSuccess,
  });

  function handleSuccess(isFavorite: boolean) {
    setSelected(isFavorite);
  }

  function handleError() {
    setSelected(!selected);
  }
  function toggleFavorite() {
    setSelected(!selected);
    favorito.mutate();
  }
  return (
    <button
      className="absolute right-2.5 top-2 text-2xl text-primary/65"
      onClick={toggleFavorite}
    >
      {selected ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </button>
  );
}
