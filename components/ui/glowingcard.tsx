import { GlareCard } from "./glare-card";

export function GlareCardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
     
      <GlareCard className="flex flex-col items-center justify-center">
        <img
          className="h-full w-full absolute inset-0 object-cover "
          src="https://i.ibb.co/G0B28np/my-image.jpg"
        />
        <div className="absolute inset-0 bg-black opacity-45"></div>
      </GlareCard>
      
    </div>
  );
}
