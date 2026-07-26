function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-16 text-center">
      <h2 className="text-5xl font-bold text-slate-900">
  Welcome to <span className="text-blue-600">MeetMind</span> 
</h2>

<p className="mt-6 text-lg text-slate-600 max-w-2xl leading-8">
  Turn every meeting into structured summaries, action items,
  and searchable insights powered by AI.
</p>
    </section>
  );
}

export default Hero;