import LargeHeading from "@/components/common/LargeHeading";
import Paragraph from "@/components/common/Paragraph";

export default function Home() {
  return (
    <section className="text-center">
      <span className="bg-purple-100 text-purple-500 p-2 rounded-lg">
        Our blog
      </span>
      <LargeHeading className="mt-2 mb-4" size="lg">
        Resources and insights
      </LargeHeading>
      <Paragraph>
        The latest industry news, interviews, technologies, and resources.
      </Paragraph>
    </section>
  );
}
