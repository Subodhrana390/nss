import MemberCard from "@/components/memberCard";
import { getPosts } from "@/utils/services";
import { useEffect, useState } from "react";

const Page = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    GetPosts();
  }, []);

  const GetPosts = () => {
    getPosts().then((res) => {
      setMembers(res);
    });
  };
  return (
    <div className="w-full">
      <div className="w-full flex flex-wrap justify-center items-center gap-8">
        {members.map((Element) => (
          <div>
            <h1 className="text-center mb-5">{Element.name}</h1>
            <div className="flex justify-center flex-wrap gap-5">
              {Element.member.map((item) => (
                <div className="img h-40 w-40">
                  <img
                    src={item.image.url}
                    className="rounded w-full "
                    alt=""
                    loading="lazy"
                  />
                  <p className="faculty_name">{item.name}</p>
                  <p className="col-span-full">{item.branch}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
