import { User } from "@nextui-org/react";
import ProfileImage from "../assets/profile.png";
import { Link, Button, Divider } from "@nextui-org/react";
import {
  Github,
  Instagram,
  AtSign,
  Linkedin,
  PencilLine,
  FolderOpenDot,
  CodeXml,
  Award,
  Home,
  Languages,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useBlogContext } from "../context/BlogContext";

function Profile({ closeMenu }) {
  const { setSubMenuOpen, language, setLang, TEXTS } = useBlogContext();

  const handleLanguageClick = () => {
    setLang(language === "tr" ? 1 : 0);
    window.location.href = language === 'tr' ? '/en' : '/tr';
  };

  return (
    <div className="flex flex-col gap-2">
      <User
        className="gap-4 justify-start"
        name="Yasin Akbulut"
        description="Jr. UI Developer @Jotform"
        avatarProps={{
          src: ProfileImage,
          isBordered: true,
          radius: "full",
        }}
      />
      <div className="navLinks flex flex-col gap-2 mt-4">
        <Button
          exact
          to={`/${language}`}
          as={NavLink}
          onClick={closeMenu}
          isExternal
          variant="light"
          radius="sm"
          className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 hover:opacity-100 text-sm px-2 h-8"
          end
        >
          <span className="flex items-center gap-2 ">
            <Home width={16} /> {TEXTS.HOME}
          </span>
        </Button>
        <Button
          to={`/${language}/blogs`}
          as={NavLink}
          onClick={() => setSubMenuOpen(true)}
          onPress={closeMenu}
          isExternal
          variant="light"
          radius="sm"
          className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 hover:opacity-100 text-sm px-2 h-8"
        >
          <span className="flex items-center gap-2 ">
            <PencilLine width={16} /> {TEXTS.BLOGS}
          </span>
        </Button>
        <Button
          to={`/${language}/projects`}
          as={NavLink}
          onClick={() => setSubMenuOpen(true)}
          onPress={closeMenu}
          isExternal
          variant="light"
          radius="sm"
          className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 hover:opacity-100 text-sm px-2 h-8"
        >
          <span className="flex items-center gap-2 ">
            <FolderOpenDot width={16} /> {TEXTS.PROJECTS}
          </span>
        </Button>
        <Button
          to={`/${language}/works`}
          as={NavLink}
          onClick={() => setSubMenuOpen(true)}
          onPress={closeMenu}
          isExternal
          variant="light"
          radius="sm"
          className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 hover:opacity-100 text-sx px-2 h-8"
        >
          <span className="flex items-center gap-2 ">
            <CodeXml width={16} /> {TEXTS.WORKS}
          </span>
        </Button>
        <Button
          to={`/${language}/experiences`}
          as={NavLink}
          onClick={closeMenu}
          isExternal
          variant="light"
          radius="sm"
          className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 hover:opacity-100 text-sm px-2 h-8"
        >
          <span className="flex items-center gap-2 ">
            <Award width={16} /> {TEXTS.EXPERIENCES}
          </span>
        </Button>
        <Button
          onClick={handleLanguageClick}
          isExternal
          variant="light"
          radius="sm"
          className="w-full text-indigo-600 justify-between font-medium data-[hover=true]:bg-indigo-600 data-[hover=true]:text-white hover:opacity-100 text-sm px-2 h-8"
        >
          <span className="flex items-center gap-2 ">
            <Languages width={16} /> {TEXTS.LANGUAGE}
          </span>
        </Button>
      </div>
      <Divider className="my-4" />
      <div className="flex flex-col gap-3 text-sm">
        <h4 className="px-2 text-xs font-medium leading-relaxed text-gray-600">
          {TEXTS.SOCIAL}
        </h4>
        <div className="flex flex-col gap-2">
          <Button
            href="https://github.com/yasinakbulut25"
            as={Link}
            isExternal
            showAnchorIcon
            variant="light"
            radius="sm"
            className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 hover:opacity-100 text-sm px-2 h-8"
          >
            <span className="flex items-center gap-2 ">
              <Github width={16} /> GitHub
            </span>
          </Button>
          <Button
            href="https://www.linkedin.com/in/yasinakbulut/"
            as={Link}
            isExternal
            showAnchorIcon
            variant="light"
            radius="sm"
            className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 hover:opacity-100 text-sm px-2 h-8"
          >
            <span className="flex items-center gap-2 ">
              <Linkedin width={16} /> Linkedin
            </span>
          </Button>
          <Button
            href="https://www.instagram.com/yasinakbulut_23/"
            as={Link}
            isExternal
            showAnchorIcon
            variant="light"
            radius="sm"
            className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 hover:opacity-100 text-sx px-2 h-8"
          >
            <span className="flex items-center gap-2 ">
              <Instagram width={16} /> Instagram
            </span>
          </Button>
          <Button
            href="mailto:akbulutyasin07@gmail.com"
            as={Link}
            isExternal
            showAnchorIcon
            variant="light"
            radius="sm"
            className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 hover:opacity-100 text-sm px-2 h-8"
          >
            <span className="flex items-center gap-2 ">
              <AtSign width={16} /> Email
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
