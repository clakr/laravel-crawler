import Button from "@/Components/Button";
import ArrowLeft from "@/Icons/ArrowLeft";
import ArrowRight from "@/Icons/ArrowRight";

export default function ({ model, from, to, total, next, prev }) {
  return (
    <section className="flex justify-between">
      <div className="flex items-center text-sm text-neutral-950/75">
        Showing {from} to {to} of {total} {model}
      </div>
      <div className="flex gap-x-2">
        <Button variant="icon" href={prev} disabled={prev === null}>
          <span className="sr-only">Previous Listing of {model}</span>
          <ArrowLeft />
        </Button>
        <Button variant="icon" href={next} disabled={next === null}>
          <span className="sr-only">Next Listing of {model}</span>
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
