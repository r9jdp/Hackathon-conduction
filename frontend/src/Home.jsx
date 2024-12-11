import FileUpload from "./components/FileDropping";

export default function Home() {
  return (
    <div>
      <div className="w-full h-dvh flex justify-center items-center border">
      <FileUpload />
      </div>
    </div>
  );
}
