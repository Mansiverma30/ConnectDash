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
    let filteredSuggestions: any = [];

    if (field === 'fullName') {
      setFullName(value);
      setInputField('fullName');
      filteredSuggestions = MockData.filter((entry: any) =>
        entry.full_name.toLowerCase().includes(value.toLowerCase())
      );
    } else if (field === 'twitter') {
      setTwitter(value);
      setInputField('twitter');
      filteredSuggestions = MockData.filter((entry: any) =>
        entry.twitter_username.toLowerCase().includes(value.toLowerCase())
      );
    } else if (field === 'instagram') {
      setInstagram(value);
      setInputField('instagram');
      filteredSuggestions = MockData.filter((entry: any) =>
        entry.instagram_username.toLowerCase().includes(value.toLowerCase())
      );
    } else if (field === 'facebook') {
      setFacebook(value);
      setInputField('facebook');
      filteredSuggestions = MockData.filter((entry: any) =>
        entry.facebook_username.toLowerCase().includes(value.toLowerCase())
      );
    } else if (field === 'whatsapp') {
      setWhatsapp(value);
      setInputField('whatsapp');
      filteredSuggestions = MockData.filter((entry: any) =>
        entry.whatsapp_number.toLowerCase().includes(value.toLowerCase())
      );
    } else if (field === 'telegram') {
      setTelegram(value);
      setInputField('telegram');
      filteredSuggestions = MockData.filter((entry: any) =>
        entry.telegram_number.toLowerCase().includes(value.toLowerCase())
      );
    } else if (field === 'threads') {
      setThreads(value);
      setInputField('threads');
      filteredSuggestions = MockData.filter((entry: any) =>
        entry.threads_username.toLowerCase().includes(value.toLowerCase())
      );
    }

    setSuggestions(filteredSuggestions);
  };

  // Handle suggestion click to auto-fill fields
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
    const matchingUser = MockData.find((user: any) => user.twitter_username === twitter ||
      user.instagram_username === instagram ||
      user.threads_username === threads || user.facebook_username === facebook);

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
    <div className="min-h-screen p-6 bg-[#F3F4F4] flex items-center justify-center scroll-mt-20 py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg" id="get-started">Enter Details</p>
                <p>Please fill out all the fields.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    {/* Full Name Input */}
                    <div className="md:col-span-5 relative">
                      <label htmlFor="full_name">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => handleInputChange(e.target.value, 'fullName')}
                        required
                      />
                      {inputField === 'fullName' && suggestions.length > 0 && (
                        <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded-lg z-10 max-h-60 overflow-y-auto">
                          {suggestions.map((suggestion) => (
                            <li
                              key={suggestion.id}
                              className="p-2 hover:bg-gray-200 cursor-pointer"
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              {suggestion.full_name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    {/* Twitter Input */}
                    <div className="md:col-span-5 relative">
                      <label htmlFor="twitter">Twitter Username</label>
                      <input
                        type="text"
                        name="twitter"
                        id="twitter"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Twitter Username"
                        value={twitter}
                        onChange={(e) => handleInputChange(e.target.value, 'twitter')}
                        required
                      />
                      {inputField === 'twitter' && suggestions.length > 0 && (
                        <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded-lg z-10 max-h-60 overflow-y-auto">
                          {suggestions.map((suggestion) => (
                            <li
                              key={suggestion.id}
                              className="p-2 hover:bg-gray-200 cursor-pointer"
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              {suggestion.twitter_username}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Instagram Input */}
                    <div className="md:col-span-5">
                      <label htmlFor="instagram">Instagram Username</label>
                      <input
                        type="text"
                        name="instagram"
                        id="instagram"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Instagram Username"
                        value={instagram}
                        onChange={(e) => handleInputChange(e.target.value, 'instagram')}
                      />
                    </div>

                    {/* Facebook Input */}
                    <div className="md:col-span-5">
                      <label htmlFor="facebook">Facebook Username</label>
                      <input
                        type="text"
                        name="facebook"
                        id="facebook"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Facebook Username"
                        value={facebook}
                        onChange={(e) => handleInputChange(e.target.value, 'facebook')}
                      />
                    </div>

                    {/* Threads Input */}
                    <div className="md:col-span-5">
                      <label htmlFor="facebook">Threads Username</label>
                      <input
                        type="text"
                        name="threads"
                        id="threads"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Threads Username"
                        value={threads}
                        onChange={(e) => handleInputChange(e.target.value, 'threads')}
                      />
                    </div>

                    {/* WhatsApp Input */}

                    <div className="md:col-span-5">
                      <label htmlFor="whatsapp">WhatsApp Phone Number</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        id="whatsapp"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Phone Number"
                        value={whatsapp}
                        onChange={(e) => handleInputChange(e.target.value, 'whatsapp')}
                        required
                      />
                    </div>

                    {/* Telegram Input */}

                    <div className="md:col-span-5">
                      <label htmlFor="telegram">Telegram Phone Number</label>
                      <input
                        type="tel"
                        name="telegram"
                        id="telegram"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Phone Number"
                        value={telegram}
                        onChange={(e) => handleInputChange(e.target.value, 'telegram')}
                        required
                      />
                    </div>
                    <div className="md:col-span-5 text-right flex justify-start items-center py-5">
                      <button className="bg-gradient-to-r from-slate-500 to-slate-700 text-white hover:shadow-md font-bold py-2 px-4 rounded" type="submit">
                        Start Analysis
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <p className="text-sm text-red-600 mt-2 text-center">
              Disclaimer: The information provided in this form is based on mock data and is not reflective of real users or social media accounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
