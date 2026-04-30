export const LiveStatisticsChange = () => {
  return (
     <ul className="flex-cb [&>li]:border-ash6 [&>li]:grid [&>li]:flex-1 [&>li]:px-4">
    <li className="border-r">
      <small>5 minutes</small>
      <span className="text-success text-lg">0.56%</span>
    </li>
    <li className="border-r">
      <small>60 minutes</small>
      <span className="text-success text-lg">0.61%</span>
    </li>
    <li>
      <small>1 day</small>
      <span className="text-success text-lg">0.80%</span>
    </li>
  </ul>
  );
};
