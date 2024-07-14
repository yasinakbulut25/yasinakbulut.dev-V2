import { User } from "@nextui-org/react";
import ProfileImage from "../assets/profile.png";
import { Link, Button } from "@nextui-org/react";
import { Github, Instagram, AtSign, Linkedin } from "lucide-react";

function Profile() {
  return (
    <>
      <User
        className="gap-4"
        name="Yasin Akbulut"
        description="Jr. UI Developer @Jotform"
        avatarProps={{
          src: ProfileImage,
          isBordered: true,
          radius: "lg",
        }}
      />
      <div className="flex flex-col gap-3 mt-4">
        <Button
          href="https://github.com/yasinakbulut25"
          as={Link}
          isExternal
          showAnchorIcon
          variant="bordered"
          className="w-full justify-between"
          startContent={<Github width={18} />}
        >
          GitHub
        </Button>
        <Button
          href="https://www.linkedin.com/in/yasinakbulut/"
          as={Link}
          isExternal
          showAnchorIcon
          variant="bordered"
          className="w-full justify-between"
          startContent={<Linkedin width={18} />}
        >
          Linkedin
        </Button>
        <Button
          href="https://www.instagram.com/yasinakbulut_23/"
          as={Link}
          isExternal
          showAnchorIcon
          variant="bordered"
          className="w-full justify-between"
          startContent={<Instagram width={18} />}
        >
          Instagram
        </Button>
        <Button
          href="mailto:akbulutyasin07@gmail.com"
          as={Link}
          isExternal
          showAnchorIcon
          variant="bordered"
          className="w-full justify-between"
          startContent={<AtSign width={18} />}
        >
          Email
        </Button>
      </div>
    </>
  );
}

export default Profile;
