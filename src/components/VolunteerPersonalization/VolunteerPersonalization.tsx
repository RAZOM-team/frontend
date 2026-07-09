import style from './VolunteerPersonalization.module.scss';
import JoinTitle from "../JoinTitle/JoinTitle";
import LittleTitle from "../LittleTitle/LittleTitle";
import RegisterTopBar from "../RegisterTopBar/RegisterTopBar";
import cn from 'classnames';
import { useMemo, useState } from 'react';
import FurtherButton from '../FurtherButton/FurtherButton.tsx';
import AcceptConditions from '../AcceptConditions/AcceptConditions.tsx';
import type { VolunteerResponses } from '../../types/registration.ts';
import ErrorMessage from '../ErrorMessage/ErrorMessage.tsx';

type Props = {
  initialResponse: VolunteerResponses,
}

const VolunteerPersonalization = ({ initialResponse }: Props) => {
  const [agree, setAgree] = useState<boolean | undefined>(undefined);
  const [responses, setResponses] = useState<VolunteerResponses>(initialResponse);
  const [errorInfo, setErrorInfo] = useState<VolunteerResponses>({
    yourHelp: '',
    freeHours: '',
    agreeWorkForFree: false,
  });
  const [isAxcepted, setIsAxcepted] = useState(false);
  const [isAxceptedApplication, setIsAxceptedApplication] = useState(false);

  const isAcceptable = useMemo(() => {
    if (
      errorInfo.yourHelp === 'Confirmed' &&
      errorInfo.freeHours === 'Confirmed' &&
      responses.agreeWorkForFree === true
    ) {
      return true;
    }

    return false;
  }, [errorInfo.freeHours, errorInfo.yourHelp, responses.agreeWorkForFree]);

  console.log(responses);
  console.log(errorInfo);
  console.log(isAcceptable);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(responses.agreeWorkForFree);

    if (responses.yourHelp.length === 0) {
      setErrorInfo((cur) => {
        return {
          ...cur,
          yourHelp: 'Це поле обов’язкове для заповнення',
        };
      });

    }

    if (responses.yourHelp.length < 6) {
      setErrorInfo((cur) => {
        return {
          ...cur,
          yourHelp: 'Це поле має містити не менше 6 симовлів.',
        };
      })
    }

    if (responses.yourHelp.length >= 6) {
      setErrorInfo((cur) => {
        return {
          ...cur,
          yourHelp: 'Confirmed',
        };
      })
    }

    if (responses.agreeWorkForFree !== true) {
      setErrorInfo((cur) => {
        return {
          ...cur,
          agreeWorkForFree: undefined,
        };
      });
    }

    if (responses.freeHours.length === 0) {
      setErrorInfo((cur) => {
        return {
          ...cur,
          freeHours: 'Це поле обов’язкове для заповнення',
        };
      });

    }

    if (responses.freeHours.length < 6) {
      setErrorInfo((cur) => {
        return {
          ...cur,
          freeHours: 'Це поле має містити не менше 6 симовлів.',
        };
      })
    }

    if (responses.freeHours.length > 6) {
      setErrorInfo((cur) => {
        return {
          ...cur,
          freeHours: 'Confirmed',
        };
      })
    }
  }

  return (
    <>
      <div className={style.personalization}>

        <RegisterTopBar fraction={81} />
        <JoinTitle joinAs={"волонтер"} />
        <LittleTitle text={"Розкажіть нам про свої навички"} />

        <form
          className={style.personalization__form}
          onSubmit={handleSubmit}
          id="form"
        >

          <label className={style.personalization__label}>
            Чим би ти хотів нам допомогти?

            <input
              type="text"
              name='help-service'
              placeholder="Наприклад, проводити майстер-класи"

              className={cn(style.personalization__input, {
                [style['personalization__input--error']]:
                  errorInfo.yourHelp.length > 0 &&
                  errorInfo.yourHelp !== 'Confirmed',
              })}

              onChange={(e) => {
                setResponses(obj => {
                  return {
                    ...obj,
                    yourHelp: e.target.value,
                  }
                })
              }}

              onBlur={() => {
                if (responses.yourHelp.length === 0) {
                  setErrorInfo((cur) => {
                    return {
                      ...cur,
                      yourHelp: 'Це поле обов’язкове для заповнення',
                    };
                  });

                  return;
                }

                if (responses.yourHelp.length < 6) {
                  setErrorInfo((cur) => {
                    return {
                      ...cur,
                      yourHelp: 'Це поле має містити не менше 6 симовлів.',
                    };
                  })
                }

                if (responses.yourHelp.length >= 6) {
                  setErrorInfo((cur) => {
                    return {
                      ...cur,
                      yourHelp: 'Confirmed',
                    };
                  })
                }
              }}
            />

            {errorInfo.yourHelp.length > 0
              && errorInfo.yourHelp !== 'Confirmed'
              && (
                <ErrorMessage error={errorInfo.yourHelp} />
              )}

          </label>

          <label className={style.personalization__label}>
            Скільки ти маєш вільного часу на тиждень?

            <input
              type="text"
              placeholder="2 години"
              className={style.personalization__input}
              name='hours'

              onChange={(e) => {
                setResponses(obj => {
                  return {
                    ...obj,
                    freeHours: e.target.value,
                  }
                })
              }}

              onBlur={() => {
                if (responses.freeHours.length === 0) {
                  setErrorInfo((cur) => {
                    return {
                      ...cur,
                      freeHours: 'Це поле обов’язкове для заповнення',
                    };
                  });

                  return;
                }

                if (responses.freeHours.length < 6) {
                  setErrorInfo((cur) => {
                    return {
                      ...cur,
                      freeHours: 'Це поле має містити не менше 6 симовлів.',
                    };
                  })
                }

                if (responses.freeHours.length > 6) {
                  setErrorInfo((cur) => {
                    return {
                      ...cur,
                      freeHours: 'Confirmed',
                    };
                  })
                }
              }}
            />

            {errorInfo.freeHours.length > 0
              && errorInfo.freeHours !== 'Confirmed'
              && (
                <ErrorMessage error={errorInfo.freeHours} />
              )}
          </label>

          <div className={style.personalization__label}>
            Долучення до організації є добровільною та неоплачуваною. Ти згоден на це?

            {errorInfo.agreeWorkForFree === undefined && (
              <ErrorMessage error={'Оберіть одну відповідь'} />
            )}

            <input type="radio" className={style.personalization__radio} />
            <input type="radio" className={style.personalization__radio} />

            <div className={style.personalization__wrapper}>
              <label className={cn(style.personalization__label, style.personalization__label__radio)}
                onClick={() => {
                  if (agree !== true) {
                    setAgree(true);

                    setResponses((cur) => {
                      return {
                        ...cur,
                        agreeWorkForFree: true,
                      };
                    });
                  }
                }}
              >

                <div className={cn(style.personalization__icon, {
                  [style.personalization__icon__default]: agree === undefined || agree === false,
                  [style.personalization__icon__chosen]: agree === true,
                })}></div>

                Так
              </label>

              <label className={cn(style.personalization__label, style.personalization__label__radio)}
                onClick={() => {
                  setResponses((cur) => {
                    return {
                      ...cur,
                      agreeWorkForFree: false,
                    };
                  });

                  if (agree !== false) {
                    setAgree(false)
                  }
                }}>

                <div className={cn(style.personalization__icon, {
                  [style.personalization__icon__default]: agree === undefined || agree === true,
                  [style.personalization__icon__chosen]: agree === false,
                })}></div>

                Ні
              </label>

            </div>

          </div >

        </form>

        <div className={style.personalization__fixed}>
          <div className={style.personalization__background}>
            <AcceptConditions
              isAxcepted={isAxcepted}
              setIsAxcepted={setIsAxcepted}
              isVolunteer={true}
              isAxceptedApplication={isAxceptedApplication}
              setIsAxceptedApplication={setIsAxceptedApplication}
            />

            <FurtherButton
              disabled={isAcceptable}
              pathPart={'registration-success'}
              form={'form'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerPersonalization;
