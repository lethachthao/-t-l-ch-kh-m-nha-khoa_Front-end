import DoctorCard from '@/app/(client)/_components/doctor/doctor-card';
import SpecialistCard from '@/app/(client)/_components/medical-specialty/medical-specialty-card';
import { isArray } from '@/utils/assertions';
import { Skeleton } from 'antd';
import { useMemo } from 'react';

const SearchResult = ({ keyword, data, isSearching }) => {
  const searchDataSeperator = useMemo(() => {
    if (!data || !data.length) return;

    return {
      doctor: data.filter((item) => item.searchType === 'doctor'),
      specialist: data.filter((item) => item.searchType === 'specialist'),
    };
  }, [data]);

  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="text-lg">
        Kết quả tìm kiếm cho từ khóa{' '}
        <span className="font-semibold">{keyword}</span>:
      </div>

      <div>
        {isSearching ? (
          <Skeleton />
        ) : !searchDataSeperator ? (
          <div>Không có kết quả tìm kiếm nào phù hợp</div>
        ) : (
          <div className="flex flex-col gap-4">
            {searchDataSeperator.doctor &&
              isArray(searchDataSeperator.doctor) &&
              !!searchDataSeperator.doctor.length && (
                <div className="flex flex-col gap-2">
                  <span className="text-gray-500">
                    Bác sĩ ({searchDataSeperator.doctor.length})
                  </span>
                  <div className="flex gap-4">
                    {searchDataSeperator.doctor.map((item) => (
                      <DoctorCard
                        key={item._id}
                        doctor={item}
                        className="w-1/4 rounded-xl shadow"
                      />
                    ))}
                  </div>
                </div>
              )}

            {searchDataSeperator.specialist &&
              isArray(searchDataSeperator.specialist) &&
              !!searchDataSeperator.specialist.length && (
                <div className="flex flex-col gap-2">
                  <span className="text-gray-500">
                    Chuyên khoa ({searchDataSeperator.specialist.length})
                  </span>
                  <div className="flex gap-4">
                    {searchDataSeperator.specialist.map((item) => (
                      <SpecialistCard
                        key={item._id}
                        id={item._id}
                        name={item.name}
                        imageUrl={item.avatar.path}
                        className="w-1/4 rounded-xl shadow"
                      />
                    ))}
                  </div>
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
