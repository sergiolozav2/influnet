import { useState } from "react";
import { MdAddReaction, MdOutlineAddReaction } from "react-icons/md";
import { useLikePost } from "../hooks/useLikePost";

type LikeButtonProps = {
  defaultLiked: boolean;
  postID: number;
  reacciones: number;
};
export function LikeButton(props: LikeButtonProps) {
  const [liked, setLiked] = useState(props.defaultLiked);
  const reaccionar = useLikePost({
    onError: onError,
    onSuccess: onSuccess,
    postID: props.postID,
  });
  function handleReaccionar() {
    setLiked(liked);
    reaccionar.mutate();
  }

  function onSuccess(reaccionExiste: boolean) {
    setLiked(reaccionExiste);
  }
  function onError() {
    setLiked(false);
  }

  let reacciones = props.reacciones;
  if (props.defaultLiked) {
    reacciones -= liked ? 0 : 1;
  } else {
    reacciones += liked ? 1 : 0;
  }
  return (
    <button className="flex items-center gap-1" onClick={handleReaccionar}>
      {liked && <MdAddReaction />}
      {!liked && <MdOutlineAddReaction />}

      <p className="text-sm font-medium">{reacciones}</p>
    </button>
  );
}
