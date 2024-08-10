import { Switch, User } from "@nextui-org/react";
import ProfileImage from "../assets/profile.png";
import { Link, Button, Divider } from "@nextui-org/react";
import {
  Github,
  Instagram,
  AtSign,
  Linkedin,
  FolderOpenDot,
  CodeXml,
  Award,
  Home,
  Languages,
  Bookmark,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useBlogContext } from "../context/BlogContext";
import { LINKS } from "../utils/constants";

function Profile({ closeMenu }) {
  const { setSubMenuOpen, language, setLang, theme, handleThemeChange, TEXTS } =
    useBlogContext();
  const handleLanguageClick = () => {
    setLang(language === "tr" ? 1 : 0);
    window.location.href = language === "tr" ? "/en" : "/tr";
  };

  return (
    <div className="flex flex-col gap-2">
      <User
        className="gap-4 justify-start dark:text-slate-100"
        name="Yasin Akbulut"
        description={
          <span className="flex gap-1 text-xs dark:text-slate-500">
            Jr. UI Developer
            <Link
              href="https://jotform.com"
              className="text-xs text-slate-400 dark:text-slate-500"
              isExternal
            >
              @Jotform
            </Link>
          </span>
        }
        avatarProps={{
          src: ProfileImage,
          isBordered: true,
          radius: "full",
        }}
      />
      <div className="navLinks flex flex-col gap-2 mt-4 dark:text-slate-300">
        <Button
          exact
          to={`/${language}`}
          as={NavLink}
          onClick={closeMenu}
          isExternal
          variant="light"
          radius="sm"
          className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 dark:data-[hover=true]:bg-slate-800 hover:opacity-100 text-sx px-2 h-8"
          end
        >
          <span className="flex items-center gap-2 ">
            <Home width={16} /> {TEXTS.HOME}
          </span>
        </Button>
        {/*         <Button
          to={`/${language}/blogs`}
          as={NavLink}
          onClick={() => setSubMenuOpen(true)}
          onPress={closeMenu}
          isExternal
          variant="light"
          radius="sm"
          className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 dark:data-[hover=true]:bg-slate-800 hover:opacity-100 text-sx px-2 h-8"
        >
          <span className="flex items-center gap-2 ">
            <PencilLine width={16} /> {TEXTS.BLOGS}
          </span>
        </Button> */}
        <Button
          to={`/${language}/projects`}
          as={NavLink}
          onClick={() => setSubMenuOpen(true)}
          onPress={closeMenu}
          isExternal
          variant="light"
          radius="sm"
          className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 dark:data-[hover=true]:bg-slate-800 hover:opacity-100 text-sx px-2 h-8"
        >
          <span className="flex items-center gap-2">
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
          className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 dark:data-[hover=true]:bg-slate-800 hover:opacity-100 text-sx px-2 h-8"
        >
          <span className="flex items-center gap-2">
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
          className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 dark:data-[hover=true]:bg-slate-800 hover:opacity-100 text-sx px-2 h-8"
        >
          <span className="flex items-center gap-2 ">
            <Award width={16} /> {TEXTS.EXPERIENCES}
          </span>
        </Button>
        <Button
          to={`/${language}/bookmarks`}
          as={NavLink}
          onClick={() => setSubMenuOpen(true)}
          onPress={closeMenu}
          isExternal
          variant="light"
          radius="sm"
          className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 dark:data-[hover=true]:bg-slate-800 hover:opacity-100 text-sx px-2 h-8"
        >
          <span className="flex items-center gap-2">
            <Bookmark width={16} /> {TEXTS.BOOKMARKS}
          </span>
        </Button>
        <Button
          onClick={handleLanguageClick}
          isExternal
          variant="light"
          radius="sm"
          className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 dark:data-[hover=true]:bg-slate-800 hover:opacity-100 text-sx px-2 h-8"
        >
          <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <Languages width={16} /> {TEXTS.LANGUAGE}
          </span>
        </Button>
        <Switch
          isSelected={theme === "dark"}
          onValueChange={handleThemeChange}
          size="sm"
          className="w-full min-w-full rounded-md font-medium data-[hover=true]:bg-gray-200 dark:data-[hover=true]:bg-slate-800 hover:opacity-100 text-sx px-2 h-10"
        >
          {TEXTS.DARK_THEME}
        </Switch>
      </div>
      <Divider className="my-4 dark:bg-slate-700" />
      <div className="flex flex-col gap-3 text-sm">
        <h4 className="px-2 text-xs font-medium leading-relaxed text-gray-600 dark:text-slate-500">
          {TEXTS.SOCIAL}
        </h4>
        <div className="flex flex-col gap-2 dark:text-slate-300">
          <Button
            href={LINKS.GITHUB}
            as={Link}
            isExternal
            showAnchorIcon
            variant="light"
            radius="sm"
            className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 dark:data-[hover=true]:bg-slate-800 hover:opacity-100 text-sx px-2 h-8"
          >
            <span className="flex items-center gap-2">
              <Github width={16} /> GitHub
            </span>
          </Button>
          <Button
            href={LINKS.LINKEDIN}
            as={Link}
            isExternal
            showAnchorIcon
            variant="light"
            radius="sm"
            className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 dark:data-[hover=true]:bg-slate-800 hover:opacity-100 text-sx px-2 h-8"
          >
            <span className="flex items-center gap-2 ">
              <Linkedin width={16} /> Linkedin
            </span>
          </Button>
          <Button
            href={LINKS.INSTAGRAM}
            as={Link}
            isExternal
            showAnchorIcon
            variant="light"
            radius="sm"
            className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 dark:data-[hover=true]:bg-slate-800 hover:opacity-100 text-sx px-2 h-8"
          >
            <span className="flex items-center gap-2 ">
              <Instagram width={16} /> Instagram
            </span>
          </Button>
          <Button
            href={`mailto:${LINKS.EMAIL}`}
            as={Link}
            isExternal
            showAnchorIcon
            variant="light"
            radius="sm"
            className="w-full justify-between font-medium data-[hover=true]:bg-gray-200 dark:data-[hover=true]:bg-slate-800 hover:opacity-100 text-sx px-2 h-8"
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
