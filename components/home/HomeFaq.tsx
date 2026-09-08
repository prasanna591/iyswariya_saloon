import FaqList from "@/components/FaqList";
import Link from "next/link";
import { homepageFaqs } from "@/lib/services";
import { waLink } from "@/lib/site";

export default function HomeFaq() {
  return (
    <section className="bg-white">
      <FaqList faqs={homepageFaqs} />
      <div className="pb-20 text-center">
        <a
          href={waLink("Hello Iyswariya, I have a question about your services.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Still have a question?
        </a>
      </div>
    </section>
  );
}