import React from 'react';

const WeatherBackground = ({ condition, children }) => {
  const getClassForCondition = (condition) => {
    switch (condition) {
      case 'Clear':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500'; // Clear gradient
      case 'Clouds':
        return 'bg-gradient-to-r from-gray-300 to-gray-500'; // Cloudy gradient
      case 'Rain':
        return 'bg-gradient-to-r from-blue-400 to-blue-600'; // Rainy gradient
      case 'Snow':
        return 'bg-gradient-to-r from-white to-blue-200'; // Snowy gradient
      default:
        return 'bg-gradient-to-r from-gray-100 to-gray-300'; // Default gradient
    }
  };

  const getClassForTimeOfDay = () => {
    const hours = new Date().getHours();
    if (hours >= 6 && hours < 12) return 'bg-opacity-30'; // Morning
    if (hours >= 12 && hours < 18) return 'bg-opacity-40'; // Afternoon
    if (hours >= 18 && hours < 21) return 'bg-opacity-50'; // Evening
    return 'bg-opacity-60'; // Night
  };

  const weatherClass = getClassForCondition(condition);
  const timeClass = getClassForTimeOfDay();

  // Combine weather gradient with time-of-day opacity
  const combinedClass = `${weatherClass} ${timeClass} bg-cover bg-center`;

  return (
    <div className={`flex flex-col justify-center items-center text-center text-white h-screen w-full ${combinedClass}`}>
      {children}
    </div>
  );
};

export default WeatherBackground;
