import {
  FaDatabase,
  FaFileCsv,
  FaLess,
  FaPalette,
  FaSoap,
  FaStoreAlt,
  FaTerminal,
} from "react-icons/fa";
import {
  SiAngular,
  SiApacheairflow,
  SiApachekafka,
  SiApollographql,
  SiCplusplus,
  SiCsharp,
  SiDocker,
  SiGit,
  SiGo,
  SiGraphql,
  SiJson,
  SiMarkdown,
  SiNpm,
  SiPhp,
  SiPowershell,
  SiPython,
  SiRuby,
  SiSass,
  SiSwift,
  SiTypescript,
  SiYaml,
} from "react-icons/si";
import {
  IoImageOutline,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import { DiJava } from "react-icons/di";
import { BsFiletypeXml } from "react-icons/bs";
import { FaFile, FaVuejs } from "react-icons/fa6";
import { RxTextAlignJustify } from "react-icons/rx";
import { FunctionComponent } from "react";

const FileIcon: FunctionComponent<{ filename: string }> = ({ filename }) => {
  const extension = filename.slice(filename.lastIndexOf(".") + 1);
  switch (extension) {
    case "html":
      return <IoLogoHtml5 color="orange" className="icon" />;
    case "css":
      return <IoLogoCss3 color="turquoise" className="icon" />;
    case "js":
      return <IoLogoJavascript color="yellow" className="icon" />;
    case "jsx":
      return <IoLogoReact color="blue" className="icon" />;
    case "py":
      return <SiPython color="blue" className="icon" />;
    case "java":
      return <DiJava color="red" className="icon" />;
    case "cs":
      return <SiCsharp color="blue" className="icon" />;
    case "cpp":
      return <SiCplusplus color="blue" className="icon" />;
    case "rb":
      return <SiRuby color="red" className="icon" />;
    case "swift":
      return <SiSwift color="orange" className="icon" />;
    case "go":
      return <SiGo color="blue" className="icon" />;
    case "php":
    case "php1":
    case "php2":
    case "php3":
    case "php4":
    case "php5":
    case "php6":
    case "php7":
    case "php8":
      return <SiPhp color="purple" className="icon" />;
    case "ts":
      return <SiTypescript color="blue" className="icon" />;
    case "docker":
      return <SiDocker color="blue" className="icon" />;
    case "image":
      return <IoImageOutline color="grey" className="icon" />;
    case "json":
      return <SiJson color="grey" className="icon" />;
    case "xml":
      return <BsFiletypeXml color="grey" className="icon" />;
    case "md":
      return <SiMarkdown color="grey" className="icon" />;
    case "npmignore":
      return <SiNpm color="red" className="icon" />;
    case "gitignore":
      return <SiGit color="red" className="icon" />;
    case "Dockerfile":
      return <SiDocker color="blue" className="icon" />;
    case "html":
      return <IoLogoHtml5 color="orange" className="icon" />;
    case "css":
      return <IoLogoCss3 color="turquoise" className="icon" />;
    case "js":
      return <IoLogoJavascript color="yellow" className="icon" />;
    case "jsx":
      return <IoLogoReact color="blue" className="icon" />;
    case "py":
      return <SiPython color="blue" className="icon" />;
    case "java":
      return <DiJava color="red" className="icon" />;
    case "cs":
      return <SiCsharp color="blue" className="icon" />;
    case "rb":
      return <SiRuby color="red" className="icon" />;
    case "swift":
      return <SiSwift color="orange" className="icon" />;
    case "go":
      return <SiGo color="blue" className="icon" />;
    case "ts":
      return <SiTypescript color="blue" className="icon" />;
    case "image":
      return <IoImageOutline color="grey" className="icon" />;
    case "json":
      return <SiJson color="grey" className="icon" />;
    case "md":
      return <SiMarkdown color="grey" className="icon" />;
    case "npmignore":
      return <SiNpm color="red" className="icon" />;
    case "gitignore":
      return <SiGit color="red" className="icon" />;
    case "docker":
    case "Dockerfile":
      return <SiDocker color="blue" className="icon" />;
    case "sh":
      return <FaTerminal color="grey" className="icon" />;
    case "ps1":
      return <SiPowershell color="blue" className="icon" />;
    case "yaml":
      return <SiYaml color="blue" className="icon" />;
    case "csv":
      return <FaFileCsv color="green" className="icon" />;
    case "sql":
      return <FaDatabase color="blue" className="icon" />;
    case "sass":
      return <SiSass color="pink" className="icon" />;
    case "less":
      return <FaLess color="blue" className="icon" />;
    case "styl":
      return <FaPalette color="purple" className="icon" />;
    case "vue":
      return <FaVuejs color="green" className="icon" />;
    case "angular":
      return <SiAngular color="red" className="icon" />;
    case "vuex":
      return <FaStoreAlt color="green" className="icon" />;
    case "rxjs":
      return <RxTextAlignJustify color="blue" className="icon" />;
    case "graphql":
      return <SiGraphql color="pink" className="icon" />;
    case "apollo":
      return <SiApollographql color="purple" className="icon" />;
    case "soap":
      return <FaSoap color="blue" className="icon" />;
    case "avro":
      return <SiApachekafka color="blue" className="icon" />;
    case "thrift":
      return <SiApacheairflow color="blue" className="icon" />;

    default:
      return <FaFile color="grey" className="icon" />;
  }
};

export default FileIcon;
