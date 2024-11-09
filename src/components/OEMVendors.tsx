import React from 'react';

export function OEMVendors() {
  const vendors = [
    {
      name: 'Siemens',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg'
    },
    {
      name: 'Schneider Electric',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Schneider_Electric_2007.svg'
    },
    {
      name: 'Rockwell Automation',
      logo: 'https://th.bing.com/th/id/R.4c7eb87dceabf9306ca78fbd56f7491c?rik=v1oadW1zjTUqbg&pid=ImgRaw&r=0'
    },
    {
      name: 'ABB',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg'
    },
    {
      name: 'Honeywell',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Honeywell_logo.svg'
    },
    {
      name: 'Emerson',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Emerson_Electric_Logo.svg'
    },
    {
      name: 'Yokogawa',
      logo: 'https://seeklogo.com/images/Y/yokogawa-logo-F450887C35-seeklogo.com.png'
    },
    {
      name: 'Mitsubishi Electric',
      logo: 'https://th.bing.com/th/id/R.0d6ddb7c221b7902d779ac8cbe670c1e?rik=%2f3nft5S%2fDsq%2bGQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-JUg4bn6OCT8%2fUjNG2TYp9xI%2fAAAAAAAABXs%2fhP9l3TIjSoo%2fs1600%2fmitsubishi_logo.jpg&ehk=ghevsVUIPQiOQmxP39GufUvdqzwmFK3k8FAk%2bLSndUM%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      name: 'GE',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg'
    }
  ];

  // Duplicate vendors array for seamless scrolling
  const scrollVendors = [...vendors, ...vendors, ...vendors];

  return (
    <div className="bg-slate-800 rounded-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">
          Comprehensive OEM Vendor Coverage
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Stay informed about the latest vulnerabilities and security recommendations for leading OEM vendors in the industrial automation space.
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {scrollVendors.map((vendor, index) => (
            <div 
              key={`${vendor.name}-${index}`}
              className="flex-none w-[200px] mx-4 flex items-center justify-center"
            >
              <div className="bg-white p-4 rounded-lg hover:bg-gray-100 transition-colors w-full h-[80px] flex items-center justify-center">
                <img 
                  src={vendor.logo} 
                  alt={`${vendor.name} logo`}
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.parentElement!.innerHTML = `<span class="text-lg font-semibold text-slate-900">${vendor.name}</span>`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}