export default function Notifications() {
  return (
    <div className="w-full flex items-center justify-center pb-28">
      <div className="w-full max-w-[1200px] h-full flex flex-col items-start justify-start space-y-8">
        <div className="flex flex-col items-start justify-start space-y-0.5">
          <h1 className="text-xl text-primary font-bold">Notifications</h1>
          <span className="text-xs text-muted-foreground">
            Stay updated about your reminders
          </span>
        </div>
      </div>
    </div>
  );
}
