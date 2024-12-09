import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MockData from './Analysis/MockData/MockData.json';

const GetStarted: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [facebook, setFacebook] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [telegram, setTelegram] = useState('');
  const [threads, setThreads] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [inputField, setInputField] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleInputChange = (value: string, field: string) => {
    setInputField(field);
    let filteredSuggestions: any[] = [];
    const lowerValue = value.toLowerCase();

    const filterField = (fieldKey: string) => {
      return MockData.filter((entry: any) =>
        (entry[fieldKey] || '').toLowerCase().includes(lowerValue)
      );
    };

    switch (field) {
      case 'fullName':
        setFullName(value);
        filteredSuggestions = filterField('full_name');
        break;
      case 'twitter':
        setTwitter(value);
        filteredSuggestions = filterField('twitter_username');
        break;
      case 'instagram':
        setInstagram(value);
        filteredSuggestions = filterField('instagram_username');
        break;
      case 'facebook':
        setFacebook(value);
        filteredSuggestions = filterField('facebook_username');
        break;
      case 'whatsapp':
        setWhatsapp(value);
        filteredSuggestions = filterField('whatsapp_number');
        break;
      case 'telegram':
        setTelegram(value);
        filteredSuggestions = filterField('telegram_number');
        break;
      case 'threads':
        setThreads(value);
        filteredSuggestions = filterField('threads_username');
        break;
      default:
        break;
    }

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion: any) => {
    setFullName(suggestion.full_name);
    setEmail(suggestion.email);
    setTwitter(suggestion.twitter_username);
    setInstagram(suggestion.instagram_username);
    setFacebook(suggestion.facebook_username);
    setWhatsapp(suggestion.whatsapp_number);
    setTelegram(suggestion.telegram_number);
    setThreads(suggestion.threads_username);
    setSuggestions([]);
  };

  useEffect(() => {
    const matchingUser = MockData.find(
      (user: any) =>
        user.twitter_username === twitter ||
        user.instagram_username === instagram ||
        user.threads_username === threads ||
        user.facebook_username === facebook
    );

    if (matchingUser) {
      setFullName(matchingUser.full_name);
      setEmail(matchingUser.email);
      setInstagram(matchingUser.instagram_username);
      setFacebook(matchingUser.facebook_username);
      setWhatsapp(matchingUser.whatsapp_number);
      setTelegram(matchingUser.telegram_number);
      setThreads(matchingUser.threads_username);
    }
  }, [twitter, instagram, threads, facebook]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      fullName,
      email,
      instagram,
      twitter,
      facebook,
      whatsapp,
      telegram,
      threads,
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/analysis');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 py-24">
      <div className="container max-w-screen-md mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
          Enter Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            {/* Full Name */}
            <div className="relative">
              <label htmlFor="full_name" className="block text-gray-600 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => handleInputChange(e.target.value, 'fullName')}
                className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-indigo-300"
                required
              />
              {inputField === 'fullName' && suggestions.length > 0 && (
                <ul className="absolute bg-white border rounded-lg shadow-lg w-full mt-1 z-50 max-h-48 overflow-auto">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      className="p-2 hover:bg-indigo-100 cursor-pointer"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.full_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Other Inputs */}
            {[
              { id: 'email', label: 'Email Address', value: email, setter: setEmail },
              { id: 'twitter', label: 'Twitter Username', value: twitter, setter: setTwitter },
              { id: 'instagram', label: 'Instagram Username', value: instagram, setter: setInstagram },
              { id: 'facebook', label: 'Facebook Username', value: facebook, setter: setFacebook },
              { id: 'whatsapp', label: 'WhatsApp Phone Number', value: whatsapp, setter: setWhatsapp },
              { id: 'telegram', label: 'Telegram Phone Number', value: telegram, setter: setTelegram },
              { id: 'threads', label: 'Threads Username', value: threads, setter: setThreads },
            ].map(({ id, label, value, setter }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-gray-600 font-medium">
                  {label}
                </label>
                <input
                  type="text"
                  id={id}
                  placeholder={`Enter ${label.toLowerCase()}`}
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-indigo-300"
                />
              </div>
            ))}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-slate-500 to-slate-700 text-white focus:ring focus:ring-indigo-300"
            >
              Start Analysis
            </button>
          </div>
        </form>
        <p className="text-sm text-red-500 mt-4 text-center">
        Disclaimer: The information provided in this page is based on mock data and is not reflective of real users or social media accounts.
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
