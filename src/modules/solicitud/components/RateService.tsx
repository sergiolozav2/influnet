import { CommentRatings } from "@/components/ui/rating";

type RateServiceProps = {
  defaultRating: number;
};
export function RateService(props: RateServiceProps) {
  function handleChange(rating: number) {
    console.log(rating);
  }
  return (
    <CommentRatings
      variant="yellow"
      rating={props.defaultRating}
      onRatingChange={handleChange}
    />
  );
}
